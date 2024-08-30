// @ts-nocheck

import { createTheme } from '@mui/material/styles';
import tokens from '@nivoda/design-tokens';
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { inputBaseClasses } from '@mui/material/InputBase';
import { buttonBaseClasses } from '@mui/material/ButtonBase';

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
        MuiCheckbox: {
            defaultProps: {
                disableFocusRipple: true,
                disableRipple: true,
                disableTouchRipple: true,
            },
            styleOverrides: {
                root: {
                    padding: tokens.components.checkbox.padding,
                    svg: {
                        width: tokens.components.checkbox.size,
                        height: tokens.components.checkbox.size,

                        rect: {
                            stroke: tokens.components.checkbox.border.default,
                        },
                    },
                    'input:hover ~ svg > rect': {
                        stroke: tokens.components.checkbox.border.hover,
                    },
                    '&.Mui-disabled': {
                        '& ~ .MuiTypography-root': {
                            color: tokens.components.checkbox.label.disabled,
                        },

                        'svg > rect': {
                            fill: tokens.components.checkbox.background.disabled,
                            stroke: tokens.components.checkbox.border.disabled,
                        },

                        'input:hover ~ svg > rect': {
                            stroke: tokens.components.checkbox.border.disabled,
                        },
                    },
                    '&.Mui-checked, &.MuiCheckbox-indeterminate': {
                        'svg > rect': {
                            stroke: tokens.components.checkbox.border.checked,
                        },

                        'input:hover ~ svg > rect': {
                            stroke: tokens.components.checkbox.border.checked,
                        },

                        '&.Mui-disabled': {
                            'svg > rect': {
                                stroke: tokens.components.checkbox.border.checkeddisabled,
                                fill: tokens.components.checkbox.background.checkeddisabled,
                            },

                            'input:hover ~ svg > rect': {
                                stroke: tokens.components.checkbox.border.checkeddisabled,
                            },
                        },
                    },
                },
                sizeSmall: {
                    svg: {
                        width: tokens.components.checkbox.small.size,
                        height: tokens.components.checkbox.small.size,
                    },
                    '& ~ .MuiTypography-root': {
                        fontSize: '0.875rem',
                        lineHeight: '1.43',
                    },
                },
            },
        },
        MuiSwitch: {
            defaultProps: {
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
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    [`& .${toggleButtonGroupClasses.grouped}`]: {
                        backgroundColor: tokens.components.togglebuttongroup.background.default,
                        borderColor: tokens.components.togglebuttongroup.border.colour.default,
                        borderWidth: tokens.components.togglebuttongroup.border.width.default,
                        textTransform: 'none',
                        color: tokens.components.togglebuttongroup.text.default,
                        padding: `${tokens.components.togglebuttongroup.paddingvertical} ${tokens.components.togglebuttongroup.paddinghorizontal}`,

                        ':hover': {
                            backgroundColor: tokens.components.togglebuttongroup.background.hover,
                            borderColor: tokens.components.togglebuttongroup.border.colour.hover,
                        },

                        ':disabled': {
                            borderColor: tokens.components.togglebuttongroup.border.colour.disabled,
                            color: tokens.components.togglebuttongroup.text.disabled,
                        },

                        '&.MuiToggleButton-sizeSmall': {
                            padding: `${tokens.components.togglebuttongroup.small.paddingvertical} ${tokens.components.togglebuttongroup.small.paddinghorizontal}`,
                        },
                    },
                    [`& .${toggleButtonGroupClasses.selected}`]: {
                        backgroundColor: `${tokens.components.togglebuttongroup.background.selected} !important`,
                        color: `${tokens.components.togglebuttongroup.text.selected} !important`,
                        borderColor: tokens.components.togglebuttongroup.border.colour.selected,
                        borderWidth: tokens.components.togglebuttongroup.border.width.selected,

                        '&:hover': {
                            backgroundColor: tokens.components.togglebuttongroup.background.selectedhover,
                            borderColor: tokens.components.togglebuttongroup.border.colour.selectedhover,
                        },

                        ':disabled': {
                            borderColor: tokens.components.togglebuttongroup.border.colour.selecteddisabled,
                            color: `${tokens.components.togglebuttongroup.text.selecteddisabled} !important`,
                        },
                    },
                    [`& .${toggleButtonGroupClasses.firstButton}`]: {
                        borderTopLeftRadius: tokens.components.togglebuttongroup.borderradius,
                        borderBottomLeftRadius: tokens.components.togglebuttongroup.borderradius,
                    },
                    [`& .${toggleButtonGroupClasses.lastButton}`]: {
                        borderTopRightRadius: tokens.components.togglebuttongroup.borderradius,
                        borderBottomRightRadius: tokens.components.togglebuttongroup.borderradius,
                    },
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableFocusRipple: true,
                disableRipple: true,
                disableTouchRipple: true,
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    [`& .${inputBaseClasses.root}`]: {
                        borderRadius: '8px',
                        paddingTop: '12px',
                        paddingBottom: '12px',
                        paddingLeft: '12px',

                        [`& .${inputBaseClasses.input}`]: {
                            padding: 0,
                        },

                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: '#9886ff',
                        },

                        [`&:focus-within .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: '#5620e1',
                            borderWidth: '1px',
                        },

                        [`&.${inputBaseClasses.sizeSmall}`]: {
                            paddingTop: '6px',
                            paddingBottom: '6px',
                            paddingLeft: '8px',

                            [`& .${inputBaseClasses.input}`]: {
                                padding: 0,
                            },
                        },

                        '&.Mui-disabled': {
                            [`& .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: '#e7e5e4',
                            },

                            [`& .${buttonBaseClasses.root} svg path`]: {
                                stroke: '#e7e5e4',
                            },
                        },

                        '&.Mui-error': {
                            [`& .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: '#f87171',
                            },

                            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: '#ef4444',
                            },

                            [`&:focus-within .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: '#dc2626',
                            },
                        },
                    },
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: '#d6d3d1',
                    },
                    [`& .${buttonBaseClasses.root}`]: {
                        transition: 'none',

                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    },
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableTouchRipple: true,
            },
        },
    },
    typography: {
        fontFamily: 'Inter',
    },
});

export default nivodaTheme;
