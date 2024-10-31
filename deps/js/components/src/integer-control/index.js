/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { getIntegerWithinRange } from '@teydeastudio/utils/src/get-integer-within-range.js';

/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { DetectOutside } from '../detect-outside/index.js';
import { FieldNotice } from '../field-notice/index.js';

/**
 * IntegerControl component
 *
 * @param {Object}   properties              Component properties object.
 * @param {string}   properties.label        Field's label.
 * @param {string}   properties.help         Field's help.
 * @param {number}   properties.min          Field's minimum accepted value.
 * @param {number}   properties.max          Field's maximum accepted value.
 * @param {number}   properties.value        Field's value.
 * @param {number}   properties.defaultValue Field's default value.
 * @param {Function} properties.onChange     Function callback to trigger on value change.
 *
 * @return {JSX} IntegerControl component.
 */
export const IntegerControl = ( { label, help, min, max, value, defaultValue, onChange } ) => {
	// Manage the notice state.
	const [ fieldNotice, setFieldNotice ] = useState( '' );

	// Manage edited value.
	const [ editedValue, setEditedValue ] = useState( value.toString() );

	/**
	 * Ensure data consistency
	 */
	if ( 'undefined' === typeof max || min > max ) {
		max = null;
	}

	/**
	 * Update field's "edited value" any time the given value changes
	 */
	useEffect( () => {
		setEditedValue( value.toString() );
	}, [ value ] );

	/**
	 * Update the field notice
	 */
	useEffect( () => {
		if ( editedValue === getIntegerWithinRange( editedValue, min, max ).toString() ) {
			setFieldNotice( '' );
		} else if ( null !== max ) {
			// Translators: %s - field value.
			setFieldNotice( sprintf( __( '"%1$s" is not within the accepted range (%2$d-%3$d).', 'password-requirements' ), editedValue, min, max ) );
		} else {
			// Translators: %s - field value.
			setFieldNotice( sprintf( __( '"%1$s" must be greater than or equal to %2$d.', 'password-requirements' ), editedValue, min ) );
		}
	}, [ editedValue, min, max ] );

	/**
	 * Return component
	 *
	 * @return {JSX} IntegerControl component.
	 */
	return (
		<div className="tsc-integer-control">
			<DetectOutside
				/**
				 * Validate the field's value
				 *
				 * @return {void}
				 */
				onFocusOutside={ () => {
					const updatedValue = editedValue === getIntegerWithinRange( editedValue, min, max ).toString()
						? Number.parseInt( editedValue, 10 )
						: defaultValue;

					onChange( updatedValue );
					setEditedValue( updatedValue.toString() );
				} }
			>
				<TextControl
					__nextHasNoMarginBottom
					label={ label }
					help={ help }
					value={ editedValue }
					type="number"

					/**
					 * Update the field's value
					 *
					 * @param {string} updatedValue Updated value.
					 *
					 * @return {void}
					 */
					onChange={ ( updatedValue ) => {
						setEditedValue( '' === updatedValue ? '' : Number.parseInt( updatedValue, 10 ).toString() );
					} }
				/>
			</DetectOutside>
			{
				'' !== fieldNotice && (
					<FieldNotice
						message={ fieldNotice }
					/>
				)
			}
		</div>
	);
};

/**
 * Props validation
 */
IntegerControl.propTypes = {
	label: PropTypes.string.isRequired,
	help: PropTypes.string,
	min: PropTypes.number.isRequired,
	max: PropTypes.number,
	value: PropTypes.number.isRequired,
	defaultValue: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};
