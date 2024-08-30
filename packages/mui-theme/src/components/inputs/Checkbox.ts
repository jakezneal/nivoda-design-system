// @ts-nocheck

import tokens from '@nivoda/design-tokens';

const MuiCheckboxStyles = {
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
};

export default MuiCheckboxStyles;
