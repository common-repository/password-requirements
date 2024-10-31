<?php
/**
 * Ensure that user password is compliant with applying password policy
 * when user is logging in
 *
 * @package Teydea_Studio\Password_Requirements
 */

namespace Teydea_Studio\Password_Requirements\Modules;

use Teydea_Studio\Password_Requirements\Dependencies\Utils;
use Teydea_Studio\Password_Requirements\Password_Policy;
use Teydea_Studio\Password_Requirements\Passwords_Store;
use Teydea_Studio\Password_Requirements\Settings;
use Teydea_Studio\Password_Requirements\User;
use WP_Error;
use WP_User;

/**
 * The "Module_Compliance_On_Login" class
 */
final class Module_Compliance_On_Login extends Utils\Module {
	/**
	 * Register hooks
	 *
	 * @return void
	 */
	public function register(): void {
		// Render custom nonce field on login form.
		add_action( 'login_form', [ $this, 'render_nonce_field' ] );

		// Check if current password is compliant with the password policy when user is logging in.
		add_filter( 'login_redirect', [ $this, 'on_login' ], 2, 3 );

		// Filter the login message.
		add_filter( 'login_message', [ $this, 'filter_login_message' ] );
	}

	/**
	 * Render custom nonce field on login form
	 *
	 * @return void
	 */
	public function render_nonce_field(): void {
		/** @var Utils\Nonce $nonce */
		$nonce = $this->container->get_instance_of( 'nonce', [ 'login' ] );
		$nonce->render_field();
	}

	/**
	 * Check if current password is compliant with the password policy when user is logging in
	 *
	 * @param string           $redirect_to           The redirect destination URL.
	 * @param string           $requested_redirect_to The requested redirect destination URL passed as a parameter.
	 * @param WP_User|WP_Error $user                  WP_User object if login was successful, WP_Error object otherwise.
	 *
	 * @return string Updated redirect destination URL.
	 */
	public function on_login( string $redirect_to, string $requested_redirect_to, $user ): string {
		/** @var Utils\Nonce $nonce */
		$nonce = $this->container->get_instance_of( 'nonce', [ 'login' ] );

		/**
		 * Note we can not use the "sanitize_text_field" in this case as this would falsify
		 * the compliance checks due to stripped/changed characters.
		 *
		 * For example:
		 * - "pas&\"<>word" passed through the "sanitize_text_field" function would become "pas&\"word" (note missing angular brackets)
		 */
		$password = $nonce->verify_and_get( 'POST', 'pwd', fn( ?string $value ): ?string => '' === $value ? null : $value );

		/**
		 * Only proceed if:
		 * - user has provided the password
		 * - the password is correct, thus user has been successfully logged-in
		 */
		if ( null !== $password && $user instanceof WP_User ) {
			$updated_redirect_to = null;

			/** @var User $user */
			$user = $this->container->get_instance_of( 'user', [ $user ] );

			/** @var Settings $settings */
			$settings = $this->container->get_instance_of( 'settings' );

			/** @var Passwords_Store $passwords_store */
			$passwords_store = $this->container->get_instance_of( 'passwords-store', [ $user->get_user(), $settings ] );

			/** @var Password_Policy $password_policy */
			$password_policy = $this->container->get_instance_of( 'password-policy', [ $user->get_user(), $settings, $passwords_store ] );

			// Note user password update.
			$passwords_store->note_user_password_update( $password );

			if ( $password_policy->should_user_change_password() ) {
				// Check if user's password has expired and should be changed.
				$updated_redirect_to = $user->get_password_reset_form_link_and_logout( 'pe' );
			} elseif ( false === $password_policy->is_password_compliant( $password ) ) {
				// Ensure that password is compliant with applying password policy.
				$updated_redirect_to = $user->get_password_reset_form_link_and_logout( 'pc' );
			}

			if ( null !== $updated_redirect_to ) {
				$redirect_to = $updated_redirect_to;
			}
		}

		return $redirect_to;
	}

	/**
	 * Filter the login message
	 *
	 * @param string $message Login message text.
	 *
	 * @return string Updated login message text.
	 */
	public function filter_login_message( string $message ): string {
		/** @var Utils\Nonce $nonce */
		$nonce         = $this->container->get_instance_of( 'nonce', [ 'login_message' ] );
		$login_message = $nonce->verify_and_get();

		if ( null !== $login_message ) {
			switch ( $login_message ) {
				// Password is not compliant with the password policy.
				case 'pc':
					$message = sprintf(
						'<p class="message">%s</p>',
						__( 'Your current password is not compliant with the password policy. Enter your new password below or generate one.', 'password-requirements' ),
					);

					break;
				// Password has expired.
				case 'pe':
					$message = sprintf(
						'<p class="message">%s</p>',
						__( 'Your current password has expired. Enter your new password below or generate one.', 'password-requirements' ),
					);

					break;
			}
		}

		return $message;
	}
}
