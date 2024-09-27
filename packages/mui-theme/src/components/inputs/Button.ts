import type { Components } from '@mui/material';
import {
    ComponentsButtonBorderradius,
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
    ComponentsButtonLargePaddinghorizontal,
    ComponentsButtonLargePaddingvertical,
    ComponentsButtonMediumPaddinghorizontal,
    ComponentsButtonMediumPaddingvertical,
    ComponentsButtonOutlinedErrorBackgroundActive,
    ComponentsButtonOutlinedErrorBackgroundDefault,
    ComponentsButtonOutlinedErrorBackgroundDisabled,
    ComponentsButtonOutlinedErrorBackgroundHover,
    ComponentsButtonOutlinedErrorBorderActive,
    ComponentsButtonOutlinedErrorBorderDefault,
    ComponentsButtonOutlinedErrorBorderDisabled,
    ComponentsButtonOutlinedErrorBorderHover,
    ComponentsButtonOutlinedErrorTextActive,
    ComponentsButtonOutlinedErrorTextDefault,
    ComponentsButtonOutlinedErrorTextDisabled,
    ComponentsButtonOutlinedErrorTextHover,
    ComponentsButtonOutlinedPrimaryBackgroundActive,
    ComponentsButtonOutlinedPrimaryBackgroundDefault,
    ComponentsButtonOutlinedPrimaryBackgroundDisabled,
    ComponentsButtonOutlinedPrimaryBackgroundHover,
    ComponentsButtonOutlinedPrimaryBorderActive,
    ComponentsButtonOutlinedPrimaryBorderDefault,
    ComponentsButtonOutlinedPrimaryBorderDisabled,
    ComponentsButtonOutlinedPrimaryBorderHover,
    ComponentsButtonOutlinedPrimaryTextActive,
    ComponentsButtonOutlinedPrimaryTextDefault,
    ComponentsButtonOutlinedPrimaryTextDisabled,
    ComponentsButtonOutlinedPrimaryTextHover,
    ComponentsButtonOutlinedSuccessBackgroundActive,
    ComponentsButtonOutlinedSuccessBackgroundDefault,
    ComponentsButtonOutlinedSuccessBackgroundDisabled,
    ComponentsButtonOutlinedSuccessBackgroundHover,
    ComponentsButtonOutlinedSuccessBorderActive,
    ComponentsButtonOutlinedSuccessBorderDefault,
    ComponentsButtonOutlinedSuccessBorderDisabled,
    ComponentsButtonOutlinedSuccessBorderHover,
    ComponentsButtonOutlinedSuccessTextActive,
    ComponentsButtonOutlinedSuccessTextDefault,
    ComponentsButtonOutlinedSuccessTextDisabled,
    ComponentsButtonOutlinedSuccessTextHover,
    ComponentsButtonSmallPaddinghorizontal,
    ComponentsButtonSmallPaddingvertical,
    ComponentsButtonTextErrorBackgroundActive,
    ComponentsButtonTextErrorBackgroundHover,
    ComponentsButtonTextErrorTextActive,
    ComponentsButtonTextErrorTextDefault,
    ComponentsButtonTextErrorTextDisabled,
    ComponentsButtonTextErrorTextHover,
    ComponentsButtonTextPrimaryBackgroundActive,
    ComponentsButtonTextPrimaryBackgroundHover,
    ComponentsButtonTextPrimaryTextActive,
    ComponentsButtonTextPrimaryTextDefault,
    ComponentsButtonTextPrimaryTextDisabled,
    ComponentsButtonTextPrimaryTextHover,
    ComponentsButtonTextSuccessBackgroundActive,
    ComponentsButtonTextSuccessBackgroundHover,
    ComponentsButtonTextSuccessTextActive,
    ComponentsButtonTextSuccessTextDefault,
    ComponentsButtonTextSuccessTextDisabled,
    ComponentsButtonTextSuccessTextHover,
} from '@nivoda/design-tokens';

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

const MuiButtonStyles: Components['MuiButton'] = {
    styleOverrides: {
        root: {
            variants: [],
            borderRadius: ComponentsButtonBorderradius,
            textTransform: 'none',
            transition: 'none',
        },
        sizeLarge: {
            padding: `${ComponentsButtonLargePaddingvertical} ${ComponentsButtonLargePaddinghorizontal}`,
        },
        sizeMedium: {
            padding: `${ComponentsButtonMediumPaddingvertical} ${ComponentsButtonMediumPaddinghorizontal}`,
        },
        sizeSmall: {
            padding: `${ComponentsButtonSmallPaddingvertical} ${ComponentsButtonSmallPaddinghorizontal}`,
        },
        containedPrimary: {
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
        containedSecondary: unusedButtonVariant,
        containedError: {
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
        containedSuccess: {
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
        outlinedPrimary: unusedButtonVariant,
        outlinedSecondary: {
            backgroundColor: ComponentsButtonOutlinedPrimaryBackgroundDefault,
            borderColor: ComponentsButtonOutlinedPrimaryBorderDefault,
            color: ComponentsButtonOutlinedPrimaryTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonOutlinedPrimaryBackgroundHover,
                borderColor: ComponentsButtonOutlinedPrimaryBorderHover,
                color: ComponentsButtonOutlinedPrimaryTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonOutlinedPrimaryBackgroundActive,
                borderColor: ComponentsButtonOutlinedPrimaryBorderActive,
                color: ComponentsButtonOutlinedPrimaryTextActive,
            },

            ':disabled': {
                backgroundColor: ComponentsButtonOutlinedPrimaryBackgroundDisabled,
                borderColor: ComponentsButtonOutlinedPrimaryBorderDisabled,
                color: ComponentsButtonOutlinedPrimaryTextDisabled,
            },
        },
        outlinedError: {
            backgroundColor: ComponentsButtonOutlinedErrorBackgroundDefault,
            borderColor: ComponentsButtonOutlinedErrorBorderDefault,
            color: ComponentsButtonOutlinedErrorTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonOutlinedErrorBackgroundHover,
                borderColor: ComponentsButtonOutlinedErrorBorderHover,
                color: ComponentsButtonOutlinedErrorTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonOutlinedErrorBackgroundActive,
                borderColor: ComponentsButtonOutlinedErrorBorderActive,
                color: ComponentsButtonOutlinedErrorTextActive,
            },

            ':disabled': {
                backgroundColor: ComponentsButtonOutlinedErrorBackgroundDisabled,
                borderColor: ComponentsButtonOutlinedErrorBorderDisabled,
                color: ComponentsButtonOutlinedErrorTextDisabled,
            },
        },
        outlinedSuccess: {
            backgroundColor: ComponentsButtonOutlinedSuccessBackgroundDefault,
            borderColor: ComponentsButtonOutlinedSuccessBorderDefault,
            color: ComponentsButtonOutlinedSuccessTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonOutlinedSuccessBackgroundHover,
                borderColor: ComponentsButtonOutlinedSuccessBorderHover,
                color: ComponentsButtonOutlinedSuccessTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonOutlinedSuccessBackgroundActive,
                borderColor: ComponentsButtonOutlinedSuccessBorderActive,
                color: ComponentsButtonOutlinedSuccessTextActive,
            },

            ':disabled': {
                backgroundColor: ComponentsButtonOutlinedSuccessBackgroundDisabled,
                borderColor: ComponentsButtonOutlinedSuccessBorderDisabled,
                color: ComponentsButtonOutlinedSuccessTextDisabled,
            },
        },
        textPrimary: {
            color: ComponentsButtonTextPrimaryTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonTextPrimaryBackgroundHover,
                color: ComponentsButtonTextPrimaryTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonTextPrimaryBackgroundActive,
                color: ComponentsButtonTextPrimaryTextActive,
            },

            ':disabled': {
                color: ComponentsButtonTextPrimaryTextDisabled,
            },
        },
        textSecondary: unusedButtonVariant,
        textError: {
            color: ComponentsButtonTextErrorTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonTextErrorBackgroundHover,
                color: ComponentsButtonTextErrorTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonTextErrorBackgroundActive,
                color: ComponentsButtonTextErrorTextActive,
            },

            ':disabled': {
                color: ComponentsButtonTextErrorTextDisabled,
            },
        },
        textSuccess: {
            color: ComponentsButtonTextSuccessTextDefault,

            ':hover': {
                backgroundColor: ComponentsButtonTextSuccessBackgroundHover,
                color: ComponentsButtonTextSuccessTextHover,
            },

            ':active': {
                backgroundColor: ComponentsButtonTextSuccessBackgroundActive,
                color: ComponentsButtonTextSuccessTextActive,
            },

            ':disabled': {
                color: ComponentsButtonTextSuccessTextDisabled,
            },
        },
    },
    defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
};

export default MuiButtonStyles;
