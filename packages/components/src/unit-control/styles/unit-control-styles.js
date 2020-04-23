/**
 * External dependencies
 */
import { css } from '@emotion/core';
import styled from '@emotion/styled';
/**
 * Internal dependencies
 */
import { color, rtl } from '../../utils/style-mixins';
import NumberControl from '../../number-control';

export const Root = styled.div`
	box-sizing: border-box;
	position: relative;
`;

const paddingStyles = ( { disableUnits } ) => {
	const value = disableUnits ? 3 : 28;

	return css`
		${rtl( { paddingRight: value } )()};
	`;
};

const arrowStyles = ( { disableUnits } ) => {
	if ( disableUnits ) return '';

	return css`
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	`;
};

// TODO: Resolve need to use &&& to increase specificity
// https://github.com/WordPress/gutenberg/issues/18483

export const ValueInput = styled( NumberControl )`
	&&& {
		input {
			appearance: none;
			-moz-appearance: textfield;
			display: block;
			width: 100%;

			${arrowStyles};
			${paddingStyles};
		}
	}
`;

const unitSizeStyles = ( { size } ) => {
	const sizes = {
		default: {
			top: 5,
			height: 20,
			minHeight: 20,
		},
		small: {
			top: 4,
			height: 16,
			minHeight: 16,
		},
	};

	return css( sizes[ size ] );
};

const baseUnitLabelStyles = ( props ) => {
	return css`
		appearance: none;
		background: ${color( 'ui.background' )};
		border-radius: 2px;
		border: none;
		box-sizing: border-box;
		color: ${color( 'darkGray.500' )};
		display: block;
		font-size: 8px;
		line-height: 1;
		letter-spacing: -0.5px;
		outline: none;
		padding: 2px 2px;
		position: absolute;
		text-align-last: center;
		text-transform: uppercase;
		width: 22px;

		${rtl( { right: 4 } )()}
		${unitSizeStyles( props )}
	`;
};

const unitLabelPaddingStyles = ( { size } ) => {
	const sizes = {
		default: '6px 2px',
		small: '4px 2px',
	};

	return css( { padding: sizes[ size ] } );
};

export const UnitLabel = styled.div`
	&&& {
		pointer-events: none;

		${baseUnitLabelStyles};
		${unitLabelPaddingStyles};
	}
`;

export const UnitSelect = styled.select`
	&&& {
		${baseUnitLabelStyles};
		cursor: pointer;
		border: 1px solid transparent;

		&:hover {
			background-color: ${color( 'lightGray.300' )};
		}

		&:focus {
			border-color: ${color( 'ui.borderFocus' )};
			outline: 2px solid transparent;
			outline-offset: 0;
		}
	}
`;