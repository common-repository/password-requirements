<?php
/**
 * Load plugin tokens and dependencies
 *
 * @package Teydea_Studio\Password_Requirements
 */

namespace Teydea_Studio\Password_Requirements;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Teydea_Studio\Password_Requirements\Dependencies\Universal_Modules;
use Teydea_Studio\Password_Requirements\Dependencies\Utils;

/**
 * Class autoloader
 */
spl_autoload_register(
	/**
	 * Autoload plugin classes
	 *
	 * @param string $class_name Class name.
	 *
	 * @return void
	 */
	function ( string $class_name ): void {
		$class_map = include __DIR__ . '/classmap.php';

		if ( isset( $class_map[ $class_name ] ) ) {
			require_once __DIR__ . $class_map[ $class_name ];
		}
	},
);

/**
 * Get the plugin container object
 *
 * @return ?Utils\Plugin Plugin container object, null if couldn't construct.
 */
function get_container(): ?object {
	// Check if dependencies are met.
	if ( ! class_exists( 'Teydea_Studio\Password_Requirements\Dependencies\Utils\Plugin' ) ) {
		return null;
	}

	// Construct the plugin object.
	$plugin = new Utils\Plugin();

	$plugin->set_data_prefix( 'password_requirements' );
	$plugin->set_data_keys(
		[
			'option'    => [
				'password_requirements__settings',
				'password_requirements__should_initiate_onboarding',
			],
			'user_meta' => [ 'password_requirements__password_changed_at' ],
		],
	);

	$plugin->set_instantiable_classes(
		[
			'asset'           => Utils\Asset::class,
			'cache'           => Utils\Cache::class,
			'nonce'           => Utils\Nonce::class,
			'password-policy' => Password_Policy::class,
			'passwords-store' => Passwords_Store::class,
			'screen'          => Utils\Screen::class,
			'settings'        => Settings::class,
			'user'            => User::class,
		],
	);

	$plugin->set_main_dir( __DIR__ );
	$plugin->set_modules(
		[
			Modules\Module_Compliance_On_Interaction::class,
			Modules\Module_Compliance_On_Login::class,
			Modules\Module_Compliance_On_Password_Change::class,
			Modules\Module_Password_Hint::class,
			Modules\Module_Plugin_Upgrade_Action_Link::class,
			Modules\Module_Settings_Page::class,
			Modules\Module_Site_Health::class,
			Universal_Modules\Module_Cache_Invalidation::class,
			Universal_Modules\Module_Endpoint_Settings::class,
			Universal_Modules\Module_Plugin_Row_Meta::class,
			Universal_Modules\Module_Translations::class,
		],
	);

	$plugin->set_name( 'Password Policy & Complexity Requirements' );
	$plugin->set_slug( 'password-requirements' );
	$plugin->set_supports_network( true );
	$plugin->set_version( '2.6.1' );

	return $plugin;
}
