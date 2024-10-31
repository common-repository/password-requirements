<?php
/**
 * Plugin Name: Password Policy & Complexity Requirements
 * Plugin URI: https://teydeastudio.com/products/password-policy-and-complexity-requirements/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=Plugin&utm_campaign=Plugin+research&utm_content=Plugin+header
 * Description: Set up the password policy and complexity requirements for the users of your WordPress website.
 * Version: 2.6.1
 * Text Domain: password-requirements
 * Domain Path: /languages
 * Requires PHP: 7.4
 * Requires at least: 6.6
 * Author: Teydea Studio
 * Author URI: https://teydeastudio.com/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=WordPress.org&utm_campaign=Company+research&utm_content=Plugin+header
 * Network: true
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 *
 * @package Teydea_Studio\Password_Requirements
 */

namespace Teydea_Studio\Password_Requirements;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use function Teydea_Studio\Password_Requirements\get_container;

/**
 * Require loader
 */
require_once __DIR__ . '/loader.php';

/**
 * Initialize the plugin
 */
add_action(
	'plugins_loaded',
	function (): void {
		$container = get_container();

		if ( null !== $container ) {
			$container->init();
		}
	},
);

/**
 * Handle the plugin's activation hook
 */
register_activation_hook(
	__FILE__,
	function (): void {
		$container = get_container();

		if ( null !== $container ) {
			$container->on_activation();
		}
	},
);

/**
 * Handle the plugin's deactivation hook
 */
register_deactivation_hook(
	__FILE__,
	function (): void {
		$container = get_container();

		if ( null !== $container ) {
			$container->on_deactivation();
		}
	},
);
