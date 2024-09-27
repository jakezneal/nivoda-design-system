import type { Components } from '@mui/material';
import { iconButtonClasses } from '@mui/material/IconButton';
import {
    ComponentsButtonContainedErrorBackgroundActive,
    ComponentsButtonContainedErrorBackgroundDefault,
    ComponentsButtonContainedErrorBackgroundDisabled,
    ComponentsButtonContainedErrorBackgroundHover,
    ComponentsButtonContainedErrorTextActive,
    ComponentsButtonContainedErrorTextDefault,
    ComponentsButtonContainedErrorTextDisabled,
    ComponentsButtonContainedErrorTextHover,
    ComponentsButtonContainedPrimaryBackgroundActive,
    ComponentsButtonContainedPrimaryBackgroundDefault,
    ComponentsButtonContainedPrimaryBackgroundDisabled,
    ComponentsButtonContainedPrimaryBackgroundHover,
    ComponentsButtonContainedPrimaryTextActive,
    ComponentsButtonContainedPrimaryTextDefault,
    ComponentsButtonContainedPrimaryTextDisabled,
    ComponentsButtonContainedPrimaryTextHover,
    ComponentsButtonContainedSuccessBackgroundActive,
    ComponentsButtonContainedSuccessBackgroundDefault,
    ComponentsButtonContainedSuccessBackgroundDisabled,
    ComponentsButtonContainedSuccessBackgroundHover,
    ComponentsButtonContainedSuccessTextActive,
    ComponentsButtonContainedSuccessTextDefault,
    ComponentsButtonContainedSuccessTextDisabled,
    ComponentsButtonContainedSuccessTextHover,
} from '@nivoda/design-tokens';

const MuiIconButtonStyles: Components['MuiIconButton'] = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
    styleOverrides: {
        root: {
            [`&.${iconButtonClasses.root}`]: {
                borderRadius: '8px',
                transition: 'none',
            },
        },
        colorPrimary: {
            backgroundColor: ComponentsButtonContainedPrimaryBackgroundDefault,
            color: ComponentsButtonContainedPrimaryTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonContainedPrimaryBackgroundHover,
                color: ComponentsButtonContainedPrimaryTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonContainedPrimaryBackgroundActive,
                color: ComponentsButtonContainedPrimaryTextActive,
            },

            ':disabled': {
                backgroundColor: ComponentsButtonContainedPrimaryBackgroundDisabled,
                color: ComponentsButtonContainedPrimaryTextDisabled,
            },
        },
        colorSecondary: {
            backgroundColor: '#D6D3D1',
            borderColor: '#0C0A09',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: '#FFFFFF',

            ':hover': {
                backgroundColor: '#FFFFFF',
                borderColor: '#5620E1',
                color: '#5620E1',
            },

            ':active': {
                backgroundColor: '#F4F2FF',
                borderColor: '#5620E1',
                color: '#5620E1',
            },

            ':disabled': {
                backgroundColor: '#FAFAF9',
                borderColor: '#E7E5E4',
                color: '#A8A29E',
            },
        },
        colorError: {
            backgroundColor: ComponentsButtonContainedErrorBackgroundDefault,
            color: ComponentsButtonContainedErrorTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonContainedErrorBackgroundHover,
                color: ComponentsButtonContainedErrorTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonContainedErrorBackgroundActive,
                color: ComponentsButtonContainedErrorTextActive,
            },

            ':disabled': {
                backgroundColor: ComponentsButtonContainedErrorBackgroundDisabled,
                color: ComponentsButtonContainedErrorTextDisabled,
            },
        },
        colorSuccess: {
            backgroundColor: ComponentsButtonContainedSuccessBackgroundDefault,
            color: ComponentsButtonContainedSuccessTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonContainedSuccessBackgroundHover,
                color: ComponentsButtonContainedSuccessTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonContainedSuccessBackgroundActive,
                color: ComponentsButtonContainedSuccessTextActive,
            },

            ':disabled': {
                backgroundColor: ComponentsButtonContainedSuccessBackgroundDisabled,
                color: ComponentsButtonContainedSuccessTextDisabled,
            },
        },
        sizeLarge: {
            padding: '14px',
        },
        sizeMedium: {
            padding: '8px',
        },
        sizeSmall: {
            padding: '6px',
        },
    },
};

export default MuiIconButtonStyles;
