/**
 * External dependencies
 */
import { SettingsTabs } from '@teydeastudio/components/src/settings-tabs/index.js';
import { PromotedPluginsPanel } from '@teydeastudio/components/src/promoted-plugins-panel/index.js';
import { UpsellPanel } from '@teydeastudio/components/src/upsell-panel/index.js';
import { render } from '@teydeastudio/utils/src/render.js';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { TabManagePasswordPolicies } from './component-tab-manage-password-policies.js';

/**
 * Import styles
 */
import './styles.scss';

/**
 * Filter the settings page tabs configuration to include
 * the password policy settings
 */
addFilter(
	'password_requirements__settings_page_tabs',
	'teydeastudio/password-requirements/settings-page',

	/**
	 * Filter the settings page tabs configuration
	 *
	 * @param {Array}    tabsConfig        Settings page tabs configuration.
	 * @param {Object}   dataState         Current data state.
	 * @param {Function} dispatchDataState Data state dispatcher.
	 *
	 * @return {Array} Updated settings page tabs configuration.
	 */
	( tabsConfig, dataState, dispatchDataState ) => {
		/**
		 * Add custom tab configuration to
		 * the filtered array
		 */
		tabsConfig.push( {
			name: 'password-policy',
			title: __( 'Manage password policy', 'password-requirements' ),
			component: (
				<TabManagePasswordPolicies
					settings={ dataState.settings }
					setSettings={ ( settings ) => {
						dispatchDataState( {
							type: 'settingsChanged',
							settings,
						} );
					} }
				/>
			),
		} );

		return tabsConfig;
	}
);

/**
 * Render the "promoted plugins" panel
 */
addFilter(
	'password_requirements__promoted_plugins_panel',
	'teydeastudio/password-requirements/settings-page',

	/**
	 * Render the "promoted plugins" panel
	 *
	 * @return {JSX} Updated "promoted plugins" panel.
	 */
	() => (
		<PromotedPluginsPanel
			plugins={ [
				{
					url: 'https://teydeastudio.com/products/password-reset-enforcement/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=Plugin&utm_campaign=Plugin+cross-reference&utm_content=Settings+sidebar',
					name: __( 'Password Reset Enforcement', 'password-requirements' ),
					description: __( 'Force users to reset their WordPress passwords. Execute for all users at once, by role, or only for specific users.', 'password-requirements' ),
				},
			] }
		/>
	),
);

/**
 * Render the "upsell" panel
 */
addFilter(
	'password_requirements__upsell_panel',
	'teydeastudio/password-requirements/settings-page',

	/**
	 * Render the "upsell" panel
	 *
	 * @param {JSX} panel The "upsell" panel.
	 *
	 * @return {JSX} Updated "upsell" panel.
	 */
	( panel ) => {
		// Get the list of active plugins of ours.
		const plugins = Object.keys( window.teydeaStudio );

		// Load the panel only if PRO version of the plugin is not active.
		if ( ! plugins.includes( 'passwordRequirementsPro' ) ) {
			panel = (
				<UpsellPanel
					url="https://teydeastudio.com/products/password-policy-and-complexity-requirements/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=Plugin&utm_campaign=Plugin+upsell&utm_content=Settings+sidebar#pricing"
					benefits={ [
						__( 'Create unlimited password policies', 'password-requirements' ),
						__( 'Apply password policies to specific users (by role or by user)', 'password-requirements' ),
						__( 'Prevent passwords reuse', 'password-requirements' ),
						__( 'Full integration with WooCommerce', 'password-requirements' ),
						__( 'Get access to PRO updates and our premium support', 'password-requirements' ),
					] }
				/>
			);
		}

		// Return updated panel component.
		return panel;
	},
);

/**
 * Render the settings form
 */
render(
	<SettingsTabs
		plugin="passwordRequirements"
	/>,
	document.querySelector( 'div#password-requirements-settings-page' ),
);
