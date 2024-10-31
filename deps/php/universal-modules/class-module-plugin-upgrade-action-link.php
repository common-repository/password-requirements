<?php
/**
 * Add the plugin upgrade action link
 *
 * @package Teydea_Studio\Password_Requirements\Dependencies\Universal_Modules
 */

namespace Teydea_Studio\Password_Requirements\Dependencies\Universal_Modules;

use Teydea_Studio\Password_Requirements\Dependencies\Utils;

/**
 * The "Module_Plugin_Upgrade_Action_Link" class
 */
class Module_Plugin_Upgrade_Action_Link extends Utils\Module {
	/**
	 * Plugin upgrade link
	 *
	 * @var string
	 */
	protected string $upgrade_link = '';

	/**
	 * Register hooks
	 *
	 * @return void
	 */
	public function register(): void {
		// Filter the plugin action links.
		add_filter( sprintf( 'network_admin_plugin_action_links_%s', $this->container->get_basename() ), [ $this, 'filter_plugin_action_links' ] );
		add_filter( sprintf( 'plugin_action_links_%s', $this->container->get_basename() ), [ $this, 'filter_plugin_action_links' ] );
	}

	/**
	 * Check whether the PRO version of the plugin is active
	 *
	 * @return bool
	 */
	protected function is_pro_version_active(): bool {
		$basename = str_replace(
			$this->container->get_slug(),
			sprintf( '%s-pro', $this->container->get_slug() ),
			$this->container->get_basename(),
		);

		return is_plugin_active( $basename );
	}

	/**
	 * Filter the plugin action links
	 *
	 * @param array<string,string> $actions An array of plugin action links. By default this can include 'activate', 'deactivate', and 'delete'. With Multisite active this can also include 'network_active' and 'network_only' items.
	 *
	 * @return array<string,string> Updated array of plugin action links.
	 */
	public function filter_plugin_action_links( array $actions ): array {
		if ( '' !== $this->upgrade_link && ! $this->is_pro_version_active() ) {
			$actions = array_merge(
				[
					'upgrade' => sprintf(
						'<a href="%1$s" target="_blank" rel="noreferrer noopener" style="font-weight:bold">%2$s</a>',
						$this->upgrade_link,
						__( 'Upgrade', 'password-requirements' ),
					),
				],
				$actions,
			);
		}

		return $actions;
	}
}
