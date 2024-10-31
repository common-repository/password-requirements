<?php
/**
 * Set of methods and properties to be inherited by objects identifiable by a key
 *
 * @package Teydea_Studio\Password_Requirements\Dependencies\Validatable_Fields
 */

namespace Teydea_Studio\Password_Requirements\Dependencies\Validatable_Fields;

use Teydea_Studio\Password_Requirements\Dependencies\Utils;

/**
 * Set of methods and properties to be inherited by objects identifiable by a key
 */
trait Key_Identifiable {
	/**
	 * Key
	 *
	 * @var string
	 */
	protected string $key;

	/**
	 * Get key
	 *
	 * @return string Field key.
	 */
	public function get_key(): string {
		return $this->key;
	}

	/**
	 * Get key in the "camelCase" format
	 *
	 * @return string Field key in the "camelCase" format.
	 */
	public function get_key_camel_case(): string {
		return Utils\Strings::to_camel_case( $this->key );
	}
}
