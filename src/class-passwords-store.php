<?php
/**
 * Store past passwords of each user to ensure that users will not
 * re-use their past passwords
 *
 * @package Teydea_Studio\Password_Requirements
 */

namespace Teydea_Studio\Password_Requirements;

use DateTime;
use DateTimeZone;
use Teydea_Studio\Password_Requirements\Dependencies\Utils;
use WP_User;

/**
 * The "Passwords_Store" class
 */
class Passwords_Store {
	/**
	 * Container instance
	 *
	 * @var Utils\Container
	 */
	protected object $container;

	/**
	 * User object
	 *
	 * @var WP_User
	 */
	protected WP_User $user;

	/**
	 * Plugin settings object
	 *
	 * @var Settings
	 */
	protected object $settings;

	/**
	 * User meta key for "past passwords" database storage
	 *
	 * @var array<string, string>
	 */
	protected array $user_meta_keys;

	/**
	 * Construct the object
	 *
	 * @param Utils\Container $container Container instance.
	 * @param WP_User         $user      User object.
	 * @param Settings        $settings  Plugin settings object.
	 */
	public function __construct( object $container, WP_User $user, object $settings ) {
		$this->container = $container;
		$this->user      = $user;
		$this->settings  = $settings;

		// Define the user meta key for database storage.
		$this->user_meta_keys = [
			'password_changed_at' => sprintf( '%s__password_changed_at', $container->get_data_prefix() ),
		];
	}

	/**
	 * Get the "password changed at" value for user
	 *
	 * @return ?DateTime DateTime object if value is retrieved successfully from database, null otherwise.
	 */
	public function get_password_changed_at(): ?DateTime {
		$password_changed_at = get_user_meta( $this->user->ID, $this->user_meta_keys['password_changed_at'], true );

		return empty( $password_changed_at )
			? null
			: ( new DateTime( 'now', new DateTimeZone( '+00:00' ) ) )->setTimestamp( Utils\Type::ensure_int( $password_changed_at ) );
	}

	/**
	 * Note user password update
	 *
	 * @param string $password New password.
	 *
	 * @return void
	 */
	public function note_user_password_update( string $password ): void { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
		// Update the password change date for user.
		update_user_meta( $this->user->ID, $this->user_meta_keys['password_changed_at'], ( new DateTime( 'now', new DateTimeZone( '+00:00' ) ) )->getTimestamp() );
	}
}
