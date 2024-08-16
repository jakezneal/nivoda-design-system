import { createTheme } from '@mui/material/styles';
import tokens from '@nivoda/design-tokens';

const nivodaTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // TODO: Find out why export has NaN.
                    textTransform: 'none',
                },
                sizeLarge: {
                    padding: '20px', // TODO: Find out why export has NaN.
                    fontSize: '16px',
                    lineHeight: '16px',
                },
                sizeMedium: {
                    padding: '12px', // TODO: Find out why export has NaN.
                    fontSize: '14px',
                    lineHeight: '20px',
                },
                sizeSmall: {
                    padding: '6px 8px', // TODO: Find out why export has NaN.
                    fontSize: '14px',
                    lineHeight: '20px',
                },
                containedPrimary: {
                    backgroundColor: tokens.components.Button.contained.primary.background.default.value,
                    color: tokens.components.Button.contained.primary.text.default.value,
                    ':hover': {
                        backgroundColor: tokens.components.Button.contained.primary.background.hover.value,
                        color: tokens.components.Button.contained.primary.text.hover.value,
                    },
                    ':active': {
                        backgroundColor: tokens.components.Button.contained.primary.background.active.value,
                        color: tokens.components.Button.contained.primary.text.active.value,
                    },
                    ':disabled': {
                        backgroundColor: tokens.components.Button.contained.primary.background.disabled.value,
                        color: tokens.components.Button.contained.primary.text.disabled.value,
                    },
                },
                containedSecondary: {
                    backgroundColor: tokens.components.Button.contained.secondary.background.default.value,
                    borderColor: tokens.components.Button.contained.secondary.border.default.value,
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    color: tokens.components.Button.contained.secondary.text.default.value,
                    ':hover': {
                        backgroundColor: tokens.components.Button.contained.secondary.background.hover.value,
                        borderColor: tokens.components.Button.contained.secondary.border.hover.value,
                        color: tokens.components.Button.contained.secondary.text.hover.value,
                    },
                    ':active': {
                        backgroundColor: tokens.components.Button.contained.secondary.background.active.value,
                        borderColor: tokens.components.Button.contained.secondary.border.active.value,
                        color: tokens.components.Button.contained.secondary.text.active.value,
                    },
                    ':disabled': {
                        backgroundColor: tokens.components.Button.contained.secondary.background.disabled.value,
                        borderColor: tokens.components.Button.contained.secondary.border.disabled.value,
                        color: tokens.components.Button.contained.secondary.text.disabled.value,
                    },
                },
                containedError: {
                    backgroundColor: tokens.components.Button.contained.error.background.default.value,
                    color: tokens.components.Button.contained.error.text.default.value,
                    ':hover': {
                        backgroundColor: tokens.components.Button.contained.error.background.hover.value,
                        color: tokens.components.Button.contained.error.text.hover.value,
                    },
                    ':active': {
                        backgroundColor: tokens.components.Button.contained.error.background.active.value,
                        color: tokens.components.Button.contained.error.text.active.value,
                    },
                    ':disabled': {
                        backgroundColor: tokens.components.Button.contained.error.background.disabled.value,
                        color: tokens.components.Button.contained.error.text.disabled.value,
                    },
                },
                containedSuccess: {
                    backgroundColor: tokens.components.Button.contained.success.background.default.value,
                    color: tokens.components.Button.contained.success.text.default.value,
                    ':hover': {
                        backgroundColor: tokens.components.Button.contained.success.background.hover.value,
                        color: tokens.components.Button.contained.success.text.hover.value,
                    },
                    ':active': {
                        backgroundColor: tokens.components.Button.contained.success.background.active.value,
                        color: tokens.components.Button.contained.success.text.active.value,
                    },
                    ':disabled': {
                        backgroundColor: tokens.components.Button.contained.success.background.disabled.value,
                        color: tokens.components.Button.contained.success.text.disabled.value,
                    },
                },
            },
            defaultProps: {
                disableElevation: true,
                disableFocusRipple: true,
                disableRipple: true,
                disableTouchRipple: true,
            },
        },
    },
    typography: {
        fontFamily: 'Inter',
    },
});

export default nivodaTheme;
