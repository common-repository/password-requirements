<?php
/**
 * Plugin settings page
 *
 * @package Teydea_Studio\Password_Requirements
 */

namespace Teydea_Studio\Password_Requirements\Modules;

use Teydea_Studio\Password_Requirements\Dependencies\Universal_Modules;
use Teydea_Studio\Password_Requirements\Dependencies\Utils;

/**
 * The "Module_Settings_Page" class
 */
final class Module_Settings_Page extends Universal_Modules\Module_Settings_Page {
	/**
	 * Construct the module object
	 *
	 * @param Utils\Container $container Container instance.
	 */
	public function __construct( object $container ) {
		$this->container = $container;

		// Define the page title.
		$this->page_title = __( 'Password Policy & Complexity Requirements', 'password-requirements' );

		// Define the list of help & support links.
		$this->help_links = [
			[
				'url'   => sprintf( 'https://wordpress.org/support/plugin/%s/', $this->container->get_slug() ),
				'title' => __( 'Support forum', 'password-requirements' ),
			],
			[
				'url'   => 'mailto:hello@teydeastudio.com',
				'title' => __( 'Contact email', 'password-requirements' ),
			],
			[
				'url'   => sprintf( 'https://wordpress.org/plugins/%s/', $this->container->get_slug() ),
				'title' => __( 'Plugin on WordPress.org directory', 'password-requirements' ),
			],
			[
				'url'   => 'https://teydeastudio.com/products/password-policy-and-complexity-requirements/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=Plugin&utm_campaign=Plugin+research&utm_content=Settings+sidebar',
				'title' => __( 'Plugin on TeydeaStudio.com', 'password-requirements' ),
			],
		];
	}
}
