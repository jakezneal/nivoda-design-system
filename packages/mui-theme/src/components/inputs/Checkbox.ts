import type { Components } from '@mui/material';
import tokens from '@nivoda/design-tokens';

const MuiCheckboxStyles: Components['MuiCheckbox'] = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
    styleOverrides: {
        root: {
            // padding: tokens.components.checkbox.padding,
            padding: 0,
            svg: {
                width: tokens.components.checkbox.size,
                height: tokens.components.checkbox.size,

                rect: {
                    stroke: tokens.components.checkbox.border.colour.default,
                    rx: tokens.components.checkbox.border.radius,
                },
            },
            'input:hover ~ svg > rect': {
                stroke: tokens.components.checkbox.border.colour.hover,
            },
            '&.Mui-disabled': {
                '& ~ .MuiTypography-root': {
                    color: tokens.components.checkbox.label.disabled,
                },

                'svg > rect': {
                    fill: tokens.components.checkbox.background.disabled,
                    stroke: tokens.components.checkbox.border.colour.disabled,
                },

                'input:hover ~ svg > rect': {
                    stroke: tokens.components.checkbox.border.colour.disabled,
                },
            },
            '&.Mui-checked, &.MuiCheckbox-indeterminate': {
                'svg > rect': {
                    stroke: tokens.components.checkbox.border.colour.checked,
                },

                'input:hover ~ svg > rect': {
                    stroke: tokens.components.checkbox.border.colour.checked,
                },

                '&.Mui-disabled': {
                    'svg > rect': {
                        stroke: tokens.components.checkbox.border.colour.checkeddisabled,
                        fill: tokens.components.checkbox.background.checkeddisabled,
                    },

                    'input:hover ~ svg > rect': {
                        stroke: tokens.components.checkbox.border.colour.checkeddisabled,
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
