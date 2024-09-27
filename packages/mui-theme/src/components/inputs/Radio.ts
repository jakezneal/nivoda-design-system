import type { Components } from '@mui/material';
import {
    ComponentsRadioBackgroundDisabled,
    ComponentsRadioBorderColourChecked,
    ComponentsRadioBorderColourDefault,
    ComponentsRadioBorderColourDisabled,
    ComponentsRadioBorderColourHover,
    ComponentsRadioBorderRadius,
    ComponentsRadioLabelDisabled,
    ComponentsRadioSize,
    ComponentsRadioSmallSize,
} from '@nivoda/design-tokens';

const MuiRadioStyles: Components['MuiRadio'] = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
    styleOverrides: {
        root: {
            padding: 0,
            svg: {
                width: ComponentsRadioSize,
                height: ComponentsRadioSize,

                rect: {
                    stroke: ComponentsRadioBorderColourDefault,
                    rx: ComponentsRadioBorderRadius,
                },
            },
            'input:hover ~ svg > rect': {
                stroke: ComponentsRadioBorderColourHover,
            },
            '&.Mui-disabled': {
                '& ~ .MuiTypography-root': {
                    color: ComponentsRadioLabelDisabled,
                },

                'svg > rect': {
                    fill: ComponentsRadioBackgroundDisabled,
                    stroke: ComponentsRadioBorderColourDisabled,
                },

                'input:hover ~ svg > rect': {
                    stroke: ComponentsRadioBorderColourDisabled,
                },
            },
            '&.Mui-checked': {
                'svg > rect': {
                    stroke: ComponentsRadioBorderColourChecked,
                },

                'input:hover ~ svg > rect': {
                    stroke: ComponentsRadioBorderColourChecked,
                },

                '&.Mui-disabled': {
                    'svg > rect': {
                        stroke: ComponentsRadioBorderColourDisabled,
                        fill: ComponentsRadioBackgroundDisabled,
                    },

                    'input:hover ~ svg > rect': {
                        stroke: ComponentsRadioBorderColourDisabled,
                    },
                },
            },
        },
        sizeSmall: {
            svg: {
                width: ComponentsRadioSmallSize,
                height: ComponentsRadioSmallSize,
            },
            '& ~ .MuiTypography-root': {
                fontSize: '0.875rem',
                lineHeight: '1.43',
            },
        },
    },
};

export default MuiRadioStyles;
