import type { Components } from '@mui/material';
import { iconButtonClasses } from '@mui/material/IconButton';
import tokens from '@nivoda/design-tokens';

const MuiIconButtonStyles: Components['MuiIconButton'] = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
    styleOverrides: {
        root: {
            [`&.${iconButtonClasses.root}`]: {
                borderRadius: '8px',
                transition: 'none',
            },
        },
        colorPrimary: {
            backgroundColor: tokens.components.button.contained.primary.background.default,
            color: tokens.components.button.contained.primary.text.default,

            ':hover': {
                backgroundColor: tokens.components.button.contained.primary.background.hover,
                color: tokens.components.button.contained.primary.text.hover,
            },

            ':active': {
                backgroundColor: tokens.components.button.contained.primary.background.active,
                color: tokens.components.button.contained.primary.text.active,
            },

            ':disabled': {
                backgroundColor: tokens.components.button.contained.primary.background.disabled,
                color: tokens.components.button.contained.primary.text.disabled,
            },
        },
        colorSecondary: {
            backgroundColor: '#D6D3D1',
            borderColor: '#0C0A09',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: '#FFFFFF',

            ':hover': {
                backgroundColor: '#FFFFFF',
                borderColor: '#5620E1',
                color: '#5620E1',
            },

            ':active': {
                backgroundColor: '#F4F2FF',
                borderColor: '#5620E1',
                color: '#5620E1',
            },

            ':disabled': {
                backgroundColor: '#FAFAF9',
                borderColor: '#E7E5E4',
                color: '#A8A29E',
            },
        },
        colorError: {
            backgroundColor: tokens.components.button.contained.error.background.default,
            color: tokens.components.button.contained.error.text.default,

            ':hover': {
                backgroundColor: tokens.components.button.contained.error.background.hover,
                color: tokens.components.button.contained.error.text.hover,
            },

            ':active': {
                backgroundColor: tokens.components.button.contained.error.background.active,
                color: tokens.components.button.contained.error.text.active,
            },

            ':disabled': {
                backgroundColor: tokens.components.button.contained.error.background.disabled,
                color: tokens.components.button.contained.error.text.disabled,
            },
        },
        colorSuccess: {
            backgroundColor: tokens.components.button.contained.success.background.default,
            color: tokens.components.button.contained.success.text.default,

            ':hover': {
                backgroundColor: tokens.components.button.contained.success.background.hover,
                color: tokens.components.button.contained.success.text.hover,
            },

            ':active': {
                backgroundColor: tokens.components.button.contained.success.background.active,
                color: tokens.components.button.contained.success.text.active,
            },

            ':disabled': {
                backgroundColor: tokens.components.button.contained.success.background.disabled,
                color: tokens.components.button.contained.success.text.disabled,
            },
        },
        sizeLarge: {
            padding: '14px',
        },
        sizeMedium: {
            padding: '8px',
        },
        sizeSmall: {
            padding: '6px',
        },
    },
};

export default MuiIconButtonStyles;
