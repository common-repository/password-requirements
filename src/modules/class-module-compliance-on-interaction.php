<?php
/**
 * Ensure that user password is compliant even if user is already
 * logged in, but is interacting with WordPress
 *
 * @package Teydea_Studio\Password_Requirements
 */

namespace Teydea_Studio\Password_Requirements\Modules;

use Teydea_Studio\Password_Requirements\Dependencies\Utils;
use Teydea_Studio\Password_Requirements\Password_Policy;
use Teydea_Studio\Password_Requirements\Passwords_Store;
use Teydea_Studio\Password_Requirements\Settings;
use Teydea_Studio\Password_Requirements\User;

/**
 * The "Module_Compliance_On_Interaction" class
 */
final class Module_Compliance_On_Interaction extends Utils\Module {
	/**
	 * Register hooks
	 *
	 * @return void
	 */
	public function register(): void {
		// Check whether if the current password has not expired.
		add_action( 'init', [ $this, 'on_interaction' ] );
	}

	/**
	 * Check whether if the current password has not expired
	 *
	 * @return void
	 */
	public function on_interaction(): void {
		/** @var User $user */
		$user = $this->container->get_instance_of( 'user' );

		if ( null === $user->get_user() ) {
			return;
		}

		/** @var Utils\Cache $cache */
		$cache = $this->container->get_instance_of( 'cache' );

		$cache->set_group( $user::CACHE_GROUP__USER_PASSWORD_EXPIRY_CHECK );
		$cache->set_user( $user->get_user() );

		if ( false === $cache->read() ) {
			/** @var Settings $settings */
			$settings = $this->container->get_instance_of( 'settings' );

			/** @var Passwords_Store $passwords_store */
			$passwords_store = $this->container->get_instance_of( 'passwords-store', [ $user->get_user(), $settings ] );

			/** @var Password_Policy $password_policy */
			$password_policy = $this->container->get_instance_of( 'password-policy', [ $user->get_user(), $settings, $passwords_store ] );

			// Check if user's password has expired and should be changed.
			if ( $password_policy->should_user_change_password() ) {
				$redirect_to = $user->get_password_reset_form_link_and_logout( 'pe' );

				if ( null !== $redirect_to ) {
					wp_safe_redirect( $redirect_to );
					exit;
				}
			}

			// User password has not expired yet - cache that information for 1 hour to avoid unnecessary DB queries.
			$cache->write( true, \HOUR_IN_SECONDS );
		}
	}
}
