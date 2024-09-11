// @ts-nocheck

import tokens from '@nivoda/design-tokens';

const MuiRadioStyles = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
    styleOverrides: {
        root: {
            padding: tokens.components.radio.padding,
            svg: {
                width: tokens.components.radio.size,
                height: tokens.components.radio.size,

                rect: {
                    stroke: tokens.components.radio.border.colour.default,
                    rx: tokens.components.radio.border.radius,
                },
            },
            'input:hover ~ svg > rect': {
                stroke: tokens.components.radio.border.colour.hover,
            },
            '&.Mui-disabled': {
                '& ~ .MuiTypography-root': {
                    color: tokens.components.radio.label.disabled,
                },

                'svg > rect': {
                    fill: tokens.components.radio.background.disabled,
                    stroke: tokens.components.radio.border.colour.disabled,
                },

                'input:hover ~ svg > rect': {
                    stroke: tokens.components.radio.border.colour.disabled,
                },
            },
            '&.Mui-checked': {
                'svg > rect': {
                    stroke: tokens.components.radio.border.colour.checked,
                },

                'input:hover ~ svg > rect': {
                    stroke: tokens.components.radio.border.colour.checked,
                },

                '&.Mui-disabled': {
                    'svg > rect': {
                        stroke: tokens.components.radio.border.colour.disabled,
                        fill: tokens.components.radio.background.disabled,
                    },

                    'input:hover ~ svg > rect': {
                        stroke: tokens.components.radio.border.colour.disabled,
                    },
                },
            },
        },
        sizeSmall: {
            svg: {
                width: tokens.components.radio.small.size,
                height: tokens.components.radio.small.size,
            },
            '& ~ .MuiTypography-root': {
                fontSize: '0.875rem',
                lineHeight: '1.43',
            },
        },
    },
};

export default MuiRadioStyles;
