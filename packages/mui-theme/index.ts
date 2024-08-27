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
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: tokens.components.button.borderradius,
                    textTransform: 'none',
                    transition: 'none',
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
                        height: '1.5rem',
                    },
                    ':hover': {
                        backgroundColor: tokens.components.textfield.background.hover,
                        borderColor: tokens.components.textfield.border.hover,
                    },
                    ':focus-within': {
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
                    '&.Mui-error': {
                        backgroundColor: tokens.components.textfield.background.error,
                        borderColor: tokens.components.textfield.border.error,
                    },
                },
                sizeSmall: {
                    padding: `${tokens.components.textfield.small.paddingvertical} ${tokens.components.textfield.small.paddinghorizontal}`,
                },
                inputMultiline: {
                    minHeight: '120px',
                },
                multiline: {
                    alignItems: 'flex-start',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: tokens.base.default.spacing['2'],
                    '&.Mui-error': {
                        color: tokens.components.textfield.text.error.text,
                    },
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
        MuiSwitch: {
            defaultProps: {
                disableElevation: true,
                disableFocusRipple: true,
                disableRipple: true,
                disableTouchRipple: true,
            },
            styleOverrides: {
                root: {
                    width: tokens.components.switch.track.width,
                    height: tokens.components.switch.track.height,
                    padding: 0,
                    '& .MuiSwitch-switchBase': {
                        padding: 0,
                        marginTop: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,
                        marginBottom: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,
                        marginLeft: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,
                        '&.Mui-checked': {
                            color: tokens.components.switch.thumb.colour.checked,
                            marginLeft: 0,
                            '& + .MuiSwitch-track': {
                                backgroundColor: tokens.components.switch.track.colour.checked,
                                // Opacity isn't exporting incorrectly.
                                // opacity: tokens.components.switch.track.opacity.checked,
                                opacity: 1,
                            },
                            '&.Mui-disabled + .MuiSwitch-track': {
                                backgroundColor: tokens.components.switch.track.colour.checkeddisabled,
                                // Opacity isn't exporting incorrectly.
                                // opacity: tokens.components.switch.track.opacity.checkeddisabled,
                                opacity: 0.5,
                            },
                        },
                        '&.Mui-disabled .MuiSwitch-thumb': {
                            color: tokens.components.switch.thumb.colour.disabled,
                        },
                        '&.Mui-disabled + .MuiSwitch-track': {
                            backgroundColor: tokens.components.switch.track.colour.disabled,
                            opacity: 1,
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        boxSizing: 'border-box',
                        width: tokens.components.switch.thumb.size,
                        height: tokens.components.switch.thumb.size,
                        boxShadow: 'none',
                        color: tokens.components.switch.thumb.colour.default,
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: tokens.components.switch.track.borderradius,
                        backgroundColor: tokens.components.switch.track.colour.default,
                        // TODO: Add opacity for default state.
                        opacity: 1,
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: 'Inter',
    },
});

export default nivodaTheme;
