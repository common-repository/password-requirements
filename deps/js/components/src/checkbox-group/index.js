/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * Import styles
 */
import './styles.scss';

/**
 * CheckboxGroup component
 *
 * @param {Object} properties          Component properties object.
 * @param {JSX}    properties.children Child component to render.
 *
 * @return {JSX} CheckboxGroup component.
 */
export const CheckboxGroup = ( { children, ...otherProps } ) => (
	<div className="tsc-checkbox-group" { ...otherProps }>
		{ children }
	</div>
);

/**
 * Props validation
 */
CheckboxGroup.propTypes = {
	children: PropTypes.element.isRequired,
};
