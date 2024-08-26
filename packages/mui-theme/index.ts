// @ts-nocheck

import { createTheme } from '@mui/material/styles';
import tokens from '@nivoda/design-tokens';

const unusedButtonVariant = {
    backgroundColor: 'pink',
    border: '2px dashed purple',
    color: 'green',
    ':hover': {
        backgroundColor: 'pink',
        border: '2px dashed purple',
        color: 'green',
    },
};

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
                    borderRadius: tokens.components.button.borderradius,
                    textTransform: 'none',
                },
                sizeLarge: {
                    padding: `${tokens.components.button.large.paddingvertical} ${tokens.components.button.large.paddinghorizontal}`,
                },
                sizeMedium: {
                    padding: `${tokens.components.button.medium.paddingvertical} ${tokens.components.button.medium.paddinghorizontal}`,
                },
                sizeSmall: {
                    padding: `${tokens.components.button.small.paddingvertical} ${tokens.components.button.small.paddinghorizontal}`,
                },
                containedPrimary: {
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
                containedSecondary: unusedButtonVariant,
                containedError: {
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
                containedSuccess: {
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
                outlinedPrimary: unusedButtonVariant,
                outlinedSecondary: {
                    backgroundColor: tokens.components.button.outlined.primary.background.default,
                    borderColor: tokens.components.button.outlined.primary.border.default,
                    color: tokens.components.button.outlined.primary.text.default,
                    ':hover': {
                        backgroundColor: tokens.components.button.outlined.primary.background.hover,
                        borderColor: tokens.components.button.outlined.primary.border.hover,
                        color: tokens.components.button.outlined.primary.text.hover,
                    },
                    ':active': {
                        backgroundColor: tokens.components.button.outlined.primary.background.active,
                        borderColor: tokens.components.button.outlined.primary.border.active,
                        color: tokens.components.button.outlined.primary.text.active,
                    },
                    ':disabled': {
                        backgroundColor: tokens.components.button.outlined.primary.background.disabled,
                        borderColor: tokens.components.button.outlined.primary.border.disabled,
                        color: tokens.components.button.outlined.primary.text.disabled,
                    },
                },
                outlinedError: {
                    backgroundColor: tokens.components.button.outlined.error.background.default,
                    borderColor: tokens.components.button.outlined.error.border.default,
                    color: tokens.components.button.outlined.error.text.default,
                    ':hover': {
                        backgroundColor: tokens.components.button.outlined.error.background.hover,
                        borderColor: tokens.components.button.outlined.error.border.hover,
                        color: tokens.components.button.outlined.error.text.hover,
                    },
                    ':active': {
                        backgroundColor: tokens.components.button.outlined.error.background.active,
                        borderColor: tokens.components.button.outlined.error.border.active,
                        color: tokens.components.button.outlined.error.text.active,
                    },
                    ':disabled': {
                        backgroundColor: tokens.components.button.outlined.error.background.disabled,
                        borderColor: tokens.components.button.outlined.error.border.disabled,
                        color: tokens.components.button.outlined.error.text.disabled,
                    },
                },
                outlinedSuccess: {
                    backgroundColor: tokens.components.button.outlined.success.background.default,
                    borderColor: tokens.components.button.outlined.success.border.default,
                    color: tokens.components.button.outlined.success.text.default,
                    ':hover': {
                        backgroundColor: tokens.components.button.outlined.success.background.hover,
                        borderColor: tokens.components.button.outlined.success.border.hover,
                        color: tokens.components.button.outlined.success.text.hover,
                    },
                    ':active': {
                        backgroundColor: tokens.components.button.outlined.success.background.active,
                        borderColor: tokens.components.button.outlined.success.border.active,
                        color: tokens.components.button.outlined.success.text.active,
                    },
                    ':disabled': {
                        backgroundColor: tokens.components.button.outlined.success.background.disabled,
                        borderColor: tokens.components.button.outlined.success.border.disabled,
                        color: tokens.components.button.outlined.success.text.disabled,
                    },
                },
                textPrimary: {
                    color: tokens.components.button.text.primary.text.default,
                    ':hover': {
                        color: tokens.components.button.text.primary.text.hover,
                    },
                    ':active': {
                        backgroundColor: tokens.components.button.text.primary.background.active,
                        color: tokens.components.button.text.primary.text.active,
                    },
                    ':disabled': {
                        color: tokens.components.button.text.primary.text.disabled,
                    },
                },
                textError: {
                    color: tokens.components.button.text.error.text.default,
                    ':hover': {
                        color: tokens.components.button.text.error.text.hover,
                    },
                    ':active': {
                        backgroundColor: tokens.components.button.text.error.background.active,
                        color: tokens.components.button.text.error.text.active,
                    },
                    ':disabled': {
                        color: tokens.components.button.text.error.text.disabled,
                    },
                },
                textSuccess: {
                    color: tokens.components.button.text.success.text.default,
                    ':hover': {
                        color: tokens.components.button.text.success.text.hover,
                    },
                    ':active': {
                        backgroundColor: tokens.components.button.text.success.background.active,
                        color: tokens.components.button.text.success.text.active,
                    },
                    ':disabled': {
                        color: tokens.components.button.text.success.text.disabled,
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
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: tokens.components.textfield.background.default,
                    border: `1px solid ${tokens.components.textfield.border.default}`,
                    borderRadius: tokens.components.textfield.borderradius,
                    color: tokens.components.textfield.text.input,
                    padding: `${tokens.components.textfield.paddingvertical} ${tokens.components.textfield.paddinghorizontal}`,
                    width: '100%',
                    gap: tokens.components.textfield.gap,
                    input: {
                        padding: '0px',
                    },
                    ':hover': {
                        backgroundColor: tokens.components.textfield.background.hover,
                        borderColor: tokens.components.textfield.border.hover,
                    },
                    ':focus': {
                        backgroundColor: tokens.components.textfield.background.active,
                        borderColor: tokens.components.textfield.border.active,
                        borderSize: '1px',
                        borderStyle: 'solid',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: tokens.components.textfield.background.disabled,
                        borderColor: tokens.components.textfield.border.disabled,
                        color: tokens.components.textfield.text.input,
                    },
                    'input[aria-invalid="true"]': {
                        // backgroundColor: tokens.components.textfield.background.error,
                        borderColor: tokens.components.textfield.border.error,
                    },
                },
                sizeSmall: {
                    padding: `${tokens.components.textfield.small.paddingvertical} ${tokens.components.textfield.small.paddinghorizontal}`,
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: tokens.base.default.spacing['2'],
                },
                error: {
                    color: tokens.components.textfield.text.error.text,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: tokens.components.textfield.text.label,
                    marginBottom: tokens.base.default.spacing['2'],
                },
            },
        },
    },
    typography: {
        fontFamily: 'Inter',
    },
});

export default nivodaTheme;
