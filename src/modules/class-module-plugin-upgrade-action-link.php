<?php
/**
 * Add the plugin upgrade action link
 *
 * @package Teydea_Studio\Password_Requirements
 */

namespace Teydea_Studio\Password_Requirements\Modules;

use Teydea_Studio\Password_Requirements\Dependencies\Universal_Modules;

/**
 * The "Module_Plugin_Upgrade_Action_Link" class
 */
final class Module_Plugin_Upgrade_Action_Link extends Universal_Modules\Module_Plugin_Upgrade_Action_Link {
	/**
	 * Plugin upgrade link
	 *
	 * @var string
	 */
	protected string $upgrade_link = 'https://teydeastudio.com/products/password-policy-and-complexity-requirements/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=Plugin&utm_campaign=Plugin+upsell&utm_content=Plugin+row#pricing';
}
