import { createTheme } from '@mui/material/styles';
import tokens from '@nivoda/design-tokens';
import type { PaletteColor } from '@mui/material';

const disabledPalette: PaletteColor = {
    main: '#FFFFFF',
    light: '#FFFFFF',
    dark: '#FFFFFF',
    contrastText: '#FFFFFF',
};

const nivodaTheme = createTheme({
    palette: {
        secondary: disabledPalette,
        warning: disabledPalette,
        info: disabledPalette,
    },
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
                    borderRadius: tokens.components.modes.Default.Button.borderRadius.$value,
                    textTransform: 'none',
                },
                sizeLarge: {
                    padding: `${tokens.components.modes.Default.Button.large.paddingVertical.$value}px ${tokens.components.modes.Default.Button.large.paddingHorizontal.$value}px`,
                    fontSize: '16px',
                    lineHeight: '16px',
                },
                sizeMedium: {
                    padding: `${tokens.components.modes.Default.Button.medium.paddingVertical.$value}px ${tokens.components.modes.Default.Button.medium.paddingHorizontal.$value}px`,
                    fontSize: '14px',
                    lineHeight: '20px',
                },
                sizeSmall: {
                    padding: `${tokens.components.modes.Default.Button.small.paddingVertical.$value}px ${tokens.components.modes.Default.Button.small.paddingHorizontal.$value}px`,
                    fontSize: '14px',
                    lineHeight: '20px',
                },
                containedPrimary: {
                    backgroundColor: tokens.components.modes.Default.Button.contained.primary.background.default.$value,
                    color: tokens.components.modes.Default.Button.contained.primary.text.default.$value,
                    ':hover': {
                        backgroundColor:
                            tokens.components.modes.Default.Button.contained.primary.background.hover.$value,
                        color: tokens.components.modes.Default.Button.contained.primary.text.hover.$value,
                    },
                    ':active': {
                        backgroundColor:
                            tokens.components.modes.Default.Button.contained.primary.background.active.$value,
                        color: tokens.components.modes.Default.Button.contained.primary.text.active.$value,
                    },
                    ':disabled': {
                        backgroundColor:
                            tokens.components.modes.Default.Button.contained.primary.background.disabled.$value,
                        color: tokens.components.modes.Default.Button.contained.primary.text.disabled.$value,
                    },
                },
                containedError: {
                    backgroundColor: tokens.components.modes.Default.Button.contained.error.background.default.$value,
                    color: tokens.components.modes.Default.Button.contained.error.text.default.$value,
                    ':hover': {
                        backgroundColor: tokens.components.modes.Default.Button.contained.error.background.hover.value,
                        color: tokens.components.modes.Default.Button.contained.error.text.hover.value,
                    },
                    ':active': {
                        backgroundColor: tokens.components.modes.Default.Button.contained.error.background.active.value,
                        color: tokens.components.modes.Default.Button.contained.error.text.active.value,
                    },
                    ':disabled': {
                        backgroundColor:
                            tokens.components.modes.Default.Button.contained.error.background.disabled.value,
                        color: tokens.components.modes.Default.Button.contained.error.text.disabled.value,
                    },
                },
                containedSuccess: {
                    backgroundColor: tokens.components.modes.Default.Button.contained.success.background.default.$value,
                    color: tokens.components.modes.Default.Button.contained.success.text.default.$value,
                    ':hover': {
                        backgroundColor:
                            tokens.components.modes.Default.Button.contained.success.background.hover.$value,
                        color: tokens.components.modes.Default.Button.contained.success.text.hover.$value,
                    },
                    ':active': {
                        backgroundColor:
                            tokens.components.modes.Default.Button.contained.success.background.active.$value,
                        color: tokens.components.modes.Default.Button.contained.success.text.active.$value,
                    },
                    ':disabled': {
                        backgroundColor:
                            tokens.components.modes.Default.Button.contained.success.background.disabled.$value,
                        color: tokens.components.modes.Default.Button.contained.success.text.disabled.$value,
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
