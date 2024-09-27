import type { Components } from '@mui/material';
import {
    ComponentsCheckboxBackgroundCheckeddisabled,
    ComponentsCheckboxBackgroundDisabled,
    ComponentsCheckboxBorderColourChecked,
    ComponentsCheckboxBorderColourCheckeddisabled,
    ComponentsCheckboxBorderColourDefault,
    ComponentsCheckboxBorderColourDisabled,
    ComponentsCheckboxBorderColourHover,
    ComponentsCheckboxBorderRadius,
    ComponentsCheckboxLabelDisabled,
    ComponentsCheckboxSize,
    ComponentsCheckboxSmallSize,
} from '@nivoda/design-tokens';

const MuiCheckboxStyles: Components['MuiCheckbox'] = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
    styleOverrides: {
        root: {
            padding: 0,
            svg: {
                width: ComponentsCheckboxSize,
                height: ComponentsCheckboxSize,

                rect: {
                    stroke: ComponentsCheckboxBorderColourDefault,
                    rx: ComponentsCheckboxBorderRadius,
                },
            },
            'input:hover ~ svg > rect': {
                stroke: ComponentsCheckboxBorderColourHover,
            },
            '&.Mui-disabled': {
                '& ~ .MuiTypography-root': {
                    color: ComponentsCheckboxLabelDisabled,
                },

                'svg > rect': {
                    fill: ComponentsCheckboxBackgroundDisabled,
                    stroke: ComponentsCheckboxBorderColourDisabled,
                },

                'input:hover ~ svg > rect': {
                    stroke: ComponentsCheckboxBorderColourDisabled,
                },
            },
            '&.Mui-checked, &.MuiCheckbox-indeterminate': {
                'svg > rect': {
                    stroke: ComponentsCheckboxBorderColourChecked,
                },

                'input:hover ~ svg > rect': {
                    stroke: ComponentsCheckboxBorderColourChecked,
                },

                '&.Mui-disabled': {
                    'svg > rect': {
                        stroke: ComponentsCheckboxBorderColourCheckeddisabled,
                        fill: ComponentsCheckboxBackgroundCheckeddisabled,
                    },

                    'input:hover ~ svg > rect': {
                        stroke: ComponentsCheckboxBorderColourCheckeddisabled,
                    },
                },
            },
        },
        sizeSmall: {
            svg: {
                width: ComponentsCheckboxSmallSize,
                height: ComponentsCheckboxSmallSize,
            },
            '& ~ .MuiTypography-root': {
                fontSize: '0.875rem',
                lineHeight: '1.43',
            },
        },
    },
};

export default MuiCheckboxStyles;
