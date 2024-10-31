/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { CheckboxGroup } from '@teydeastudio/components/src/checkbox-group/index.js';
import { IntegerControl } from '@teydeastudio/components/src/integer-control/index.js';
import { buildId } from '@teydeastudio/utils/src/build-id.js';

/**
 * WordPress dependencies
 */
import { BaseControl, Panel, PanelBody, PanelRow, ToggleControl, TextControl, CheckboxControl, useBaseControlProps } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';

/**
 * PasswordPolicySettings component
 *
 * @param {Object}   properties             Component properties object.
 * @param {string}   properties.id          Password policy ID.
 * @param {Object}   properties.policy      Password policy object.
 * @param {Object}   properties.settings    Plugin settings.
 * @param {Function} properties.setSettings Function (callback) used to update the settings.
 *
 * @return {JSX} PasswordPolicySettings component.
 */
export const PasswordPolicySettings = ( { id, policy, settings, setSettings } ) => {
	// Get the base control props.
	const { baseControlProps, controlProps } = useBaseControlProps( { preferredId: buildId( 'password-requirements', 'settings-page', 'password-complexity-requirements' ) } );

	/**
	 * Handle policy update
	 *
	 * @param {Object} updatedPolicy Updated policy object.
	 */
	const setPolicy = ( updatedPolicy ) => {
		const updatedPolicies = Object.assign( {}, settings?.policies ?? {} );
		updatedPolicies[ id ] = updatedPolicy;

		setSettings( {
			...settings,
			policies: updatedPolicies,
		} );
	};

	/**
	 * Build the password complexity explanation string
	 *
	 * @return {string} Complexity explanation.
	 */
	const getComplexityExplanation = () => {
		const parts = [];

		if ( true === policy[ 'ruleSettings.complexity.uppercase' ] ) {
			parts.push( __( 'uppercase letter(s)', 'password-requirements' ) );
		}

		if ( true === policy[ 'ruleSettings.complexity.lowercase' ] ) {
			parts.push( __( 'lowercase letter(s)', 'password-requirements' ) );
		}

		if ( true === policy[ 'ruleSettings.complexity.digit' ] ) {
			parts.push( __( 'base digit(s) (0 through 9)', 'password-requirements' ) );
		}

		if ( true === policy[ 'ruleSettings.complexity.specialCharacter' ] ) {
			parts.push( __( 'special character(s)', 'password-requirements' ) );
		}

		if ( true === policy[ 'ruleSettings.complexity.uniqueCharacters' ] ) {
			parts.push( sprintf(
				// Translators: %d - number of characters.
				_n(
					'%d unique (non-repeated) character',
					'%d unique (non-repeated) characters',
					policy[ 'ruleSettings.minimumUniqueCharacters' ],
					'password-requirements',
				),
				policy[ 'ruleSettings.minimumUniqueCharacters' ],
			) );
		}

		if ( true === policy[ 'ruleSettings.complexity.consecutiveUserSymbols' ] ) {
			parts.push( sprintf(
				// Translators: %1$s - optional glue, %2$s - number of consecutive symbols of the user's name or display name allowed in the password.
				__( '%1$sallow up to %2$s from the user\'s name or display name', 'password-requirements' ),
				0 === parts.length ? '' : __( 'and to ', 'password-requirements' ),
				sprintf(
					// Translators: %d - number of symbols.
					_n(
						'%d consecutive symbol',
						'%d consecutive symbols',
						policy[ 'ruleSettings.maximumConsecutiveUserSymbols' ],
						'password-requirements',
					),
					policy[ 'ruleSettings.maximumConsecutiveUserSymbols' ],
				),
			) );
		}

		return 0 === parts.length
			? __( 'Currently, all complexity rules for this password policy are disabled.', 'password-requirements' )
			: sprintf(
				// Translators: %s - complexity explanation.
				__( 'Currently set to require: %s.', 'password-requirements' ),
				parts.join( ', ' )
			);
	};

	/**
	 * Render the component
	 */
	return (
		<div
			className="tsc-settings-tabs__container"
		>
			<Panel
				header={ sprintf(
					'%1$s: %2$s',
					(
						policy.isActive
							? __( 'Policy', 'password-requirements' )
							: __( 'Inactive Policy', 'password-requirements' )
					),
					(
						'' === policy.name
							? '-'
							: policy.name
					),
				) }
			>
				<PanelBody
					title={ __( 'General settings', 'password-requirements' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<ToggleControl
							label={ __( 'Activate this policy', 'password-requirements' ) }
							help={ __( 'You can deactivate any policy if you want to keep its settings but don\'t want to enforce it for users.', 'password-requirements' ) }
							checked={ policy.isActive }
							onChange={ () => {
								setPolicy( {
									...policy,
									isActive: ! policy.isActive,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Policy name', 'password-requirements' ) }
							value={ policy.name }
							help={ __( 'We suggest using a descriptive name.', 'password-requirements' ) }

							/**
							 * Update value of the policy name
							 *
							 * @param {string} value Updated policy name.
							 *
							 * @return {void}
							 */
							onChange={ ( value ) => {
								setPolicy( {
									...policy,
									name: value,
								} );
							} }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Enabled rules', 'password-requirements' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enforce the minimum password length', 'password-requirements' ) }
							help={ sprintf(
								// Translators: %s - minimum password length (number of characters with text).
								__( 'Once enabled, the users\' password length must equal or exceed the defined value (currently set to %s).', 'password-requirements' ),
								sprintf(
									// Translators: %d - number of characters.
									_n(
										'%d character',
										'%d characters',
										policy[ 'ruleSettings.minimumLength' ],
										'password-requirements',
									),
									policy[ 'ruleSettings.minimumLength' ],
								),
							) }
							checked={ policy[ 'rules.minimumLength' ] }
							onChange={ () => {
								setPolicy( {
									...policy,
									'rules.minimumLength': ! policy[ 'rules.minimumLength' ],
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enforce the minimum password age', 'password-requirements' ) }
							help={ sprintf(
								// Translators: %s - minimum password age (number of days with text).
								__( 'Once enabled, users can only change their passwords if the current password has been used for at least a defined period (currently set to %s).', 'password-requirements' ),
								sprintf(
									// Translators: %d - number of days.
									_n(
										'%d day',
										'%d days',
										policy[ 'ruleSettings.minimumAge' ],
										'password-requirements',
									),
									policy[ 'ruleSettings.minimumAge' ],
								),
							) }
							checked={ policy[ 'rules.minimumAge' ] }
							onChange={ () => {
								setPolicy( {
									...policy,
									'rules.minimumAge': ! policy[ 'rules.minimumAge' ],
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enforce the maximum password age', 'password-requirements' ) }
							help={ sprintf(
								// Translators: %s - maximum password age (number of days with text).
								__( 'Once enabled, users will have to change their passwords if the current password has been in use for a defined period (currently set to %s).', 'password-requirements' ),
								sprintf(
									// Translators: %d - number of days.
									_n(
										'%d day',
										'%d days',
										policy[ 'ruleSettings.maximumAge' ],
										'password-requirements',
									),
									policy[ 'ruleSettings.maximumAge' ],
								),
							) }
							checked={ policy[ 'rules.maximumAge' ] }
							onChange={ () => {
								setPolicy( {
									...policy,
									'rules.maximumAge': ! policy[ 'rules.maximumAge' ],
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enforce the password complexity requirements', 'password-requirements' ) }
							help={ sprintf(
								// Translators: %s - complexity explanation.
								__( 'Once enabled, users\' password must meet the complexity requirements. %s', 'password-requirements' ),
								getComplexityExplanation(),
							) }
							checked={ policy[ 'rules.complexity' ] }
							onChange={ () => {
								setPolicy( {
									...policy,
									'rules.complexity': ! policy[ 'rules.complexity' ],
								} );
							} }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Rule settings', 'password-requirements' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<IntegerControl
							label={ __( 'Minimum password length', 'password-requirements' ) }
							help={ __( 'Number of characters required in passwords; a valid value should be between 1 and 50.', 'password-requirements' ) }
							min={ 1 }
							max={ 50 }
							value={ policy[ 'ruleSettings.minimumLength' ] }
							defaultValue={ 10 }

							/**
							 * Update the minimum password length
							 *
							 * @param {number} updatedValue Updated value of the minimum password length.
							 *
							 * @return {void}
							 */
							onChange={ ( updatedValue ) => {
								setPolicy( {
									...policy,
									'ruleSettings.minimumLength': updatedValue,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<IntegerControl
							label={ __( 'Minimum password age', 'password-requirements' ) }
							help={ __( 'Number of days; a valid value should be between 1 and 1000.', 'password-requirements' ) }
							min={ 1 }
							max={ 1000 }
							value={ policy[ 'ruleSettings.minimumAge' ] }
							defaultValue={ 2 }

							/**
							 * Update the minimum password age
							 *
							 * @param {string} updatedValue Updated value of the minimum password age.
							 *
							 * @return {void}
							 */
							onChange={ ( updatedValue ) => {
								setPolicy( {
									...policy,
									'ruleSettings.minimumAge': updatedValue,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<IntegerControl
							label={ __( 'Maximum password age', 'password-requirements' ) }
							help={ __( 'Number of days; a valid value should be between 1 and 1000.', 'password-requirements' ) }
							min={ 1 }
							max={ 1000 }
							value={ policy[ 'ruleSettings.maximumAge' ] }
							defaultValue={ 30 }

							/**
							 * Update the maximum password age
							 *
							 * @param {string} updatedValue Updated value of the maximum password age.
							 *
							 * @return {void}
							 */
							onChange={ ( updatedValue ) => {
								setPolicy( {
									...policy,
									'ruleSettings.maximumAge': updatedValue,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<BaseControl
							{ ...baseControlProps }
							label={ __( 'Password complexity requirements', 'password-requirements' ) }
						>
							<CheckboxGroup
								{ ...controlProps }
							>
								<CheckboxControl
									label={ __( 'Uppercase letter(s) required', 'password-requirements' ) }
									checked={ policy[ 'ruleSettings.complexity.uppercase' ] }
									onChange={ () => {
										setPolicy( {
											...policy,
											'ruleSettings.complexity.uppercase': ! policy[ 'ruleSettings.complexity.uppercase' ],
										} );
									} }
								/>
								<CheckboxControl
									label={ __( 'Lowercase letter(s) required', 'password-requirements' ) }
									checked={ policy[ 'ruleSettings.complexity.lowercase' ] }
									onChange={ () => {
										setPolicy( {
											...policy,
											'ruleSettings.complexity.lowercase': ! policy[ 'ruleSettings.complexity.lowercase' ],
										} );
									} }
								/>
								<CheckboxControl
									label={ __( 'Base digit(s) (0 through 9) required', 'password-requirements' ) }
									checked={ policy[ 'ruleSettings.complexity.digit' ] }
									onChange={ () => {
										setPolicy( {
											...policy,
											'ruleSettings.complexity.digit': ! policy[ 'ruleSettings.complexity.digit' ],
										} );
									} }
								/>
								<CheckboxControl
									label={ sprintf(
										// Translators: %s - minimum number of unique (non-repeated) characters in password, with text.
										__( 'At least %s required', 'password-requirements' ),
										sprintf(
											// Translators: %d - number of characters.
											_n(
												'%d unique (non-repeated) character',
												'%d unique (non-repeated) characters',
												policy[ 'ruleSettings.minimumUniqueCharacters' ],
												'password-requirements',
											),
											policy[ 'ruleSettings.minimumUniqueCharacters' ],
										),
									) }
									checked={ policy[ 'ruleSettings.complexity.uniqueCharacters' ] }
									onChange={ () => {
										setPolicy( {
											...policy,
											'ruleSettings.complexity.uniqueCharacters': ! policy[ 'ruleSettings.complexity.uniqueCharacters' ],
										} );
									} }
								/>
								<CheckboxControl
									label={ sprintf(
										// Translators: %s - number of consecutive symbols of the user's name or display name allowed in the password, with text.
										__( 'Up to %s from the user\'s name or display name allowed', 'password-requirements' ),
										sprintf(
											// Translators: %d - number of symbols.
											_n(
												'%d consecutive symbol',
												'%d consecutive symbols',
												policy[ 'ruleSettings.maximumConsecutiveUserSymbols' ],
												'password-requirements',
											),
											policy[ 'ruleSettings.maximumConsecutiveUserSymbols' ],
										),
									) }
									checked={ policy[ 'ruleSettings.complexity.consecutiveUserSymbols' ] }
									onChange={ () => {
										setPolicy( {
											...policy,
											'ruleSettings.complexity.consecutiveUserSymbols': ! policy[ 'ruleSettings.complexity.consecutiveUserSymbols' ],
										} );
									} }
								/>
								<CheckboxControl
									label={ __( 'Special character(s) required', 'password-requirements' ) }
									checked={ policy[ 'ruleSettings.complexity.specialCharacter' ] }
									help={ createInterpolateElement(
										__( 'Special character: one of punctuation characters that are present on standard US keyboard. See: <a>Password Special Characters</a> for more details.', 'password-requirements' ),
										{
											a: <a href="https://owasp.org/www-community/password-special-characters" target="_blank" rel="noreferrer noopener" />, // eslint-disable-line jsx-a11y/anchor-has-content
										}
									) }
									onChange={ () => {
										setPolicy( {
											...policy,
											'ruleSettings.complexity.specialCharacter': ! policy[ 'ruleSettings.complexity.specialCharacter' ],
										} );
									} }
								/>
							</CheckboxGroup>
						</BaseControl>
					</PanelRow>
					<PanelRow>
						<IntegerControl
							label={ __( 'Minimum number of unique (non-repeated) characters in password', 'password-requirements' ) }
							help={ __( 'Example: in the "aabc" password, three characters are unique (non-repeated); a valid value should be between 1 and 50.', 'password-requirements' ) }
							min={ 1 }
							max={ 50 }
							value={ policy[ 'ruleSettings.minimumUniqueCharacters' ] }
							defaultValue={ 6 }

							/**
							 * Update maximum number of unique (non-repeated) characters in password
							 *
							 * @param {string} updatedValue Updated value of the maximum number of unique (non-repeated) characters in password.
							 *
							 * @return {void}
							 */
							onChange={ ( updatedValue ) => {
								setPolicy( {
									...policy,
									'ruleSettings.minimumUniqueCharacters': updatedValue,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<IntegerControl
							label={ __( 'Number of consecutive symbols of the user\'s name or display name allowed in the password', 'password-requirements' ) }
							help={ __( 'A valid value should be between 0 and 50. Examples: if "0" is chosen, all characters used in user name or display name will not be allowed in user\'s password; if "2" is chosen and user name is "Bart", password can contain "ba", "ar", and "rt", but not "bar" or "art".', 'password-requirements' ) }
							min={ 0 }
							max={ 50 }
							value={ policy[ 'ruleSettings.maximumConsecutiveUserSymbols' ] }
							defaultValue={ 4 }

							/**
							 * Update number of consecutive symbols of the user's name or display name allowed in the password
							 *
							 * @param {string} updatedValue Updated value of the number of consecutive symbols of the user's name or display name allowed in the password.
							 *
							 * @return {void}
							 */
							onChange={ ( updatedValue ) => {
								setPolicy( {
									...policy,
									'ruleSettings.maximumConsecutiveUserSymbols': updatedValue,
								} );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		</div>
	);
};

/**
 * Props validation
 */
PasswordPolicySettings.propTypes = {
	id: PropTypes.string.isRequired,
	policy: PropTypes.object.isRequired,
	settings: PropTypes.object.isRequired,
	setSettings: PropTypes.func.isRequired,
};
