<?php
/**
 * Remove plugin data when uninstalled
 *
 * @package Teydea_Studio\Password_Requirements
 */

namespace Teydea_Studio\Password_Requirements;

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

use function Teydea_Studio\Password_Requirements\get_container;

/**
 * Require loader
 */
require_once __DIR__ . '/loader.php';

/**
 * Handle the plugin uninstallation
 *
 * @return void
 */
function uninstall(): void {
	$container = get_container();

	if ( null !== $container ) {
		$container->uninstall();
	}
}

// Uninstall the plugin.
uninstall();
