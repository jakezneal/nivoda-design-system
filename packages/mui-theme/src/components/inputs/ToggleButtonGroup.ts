import type { Components } from '@mui/material';
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';
import {
    ComponentsTogglebuttongroupBackgroundDefault,
    ComponentsTogglebuttongroupBackgroundHover,
    ComponentsTogglebuttongroupBackgroundSelected,
    ComponentsTogglebuttongroupBackgroundSelectedhover,
    ComponentsTogglebuttongroupBorderColourDefault,
    ComponentsTogglebuttongroupBorderColourDisabled,
    ComponentsTogglebuttongroupBorderColourHover,
    ComponentsTogglebuttongroupBorderColourSelected,
    ComponentsTogglebuttongroupBorderColourSelecteddisabled,
    ComponentsTogglebuttongroupBorderColourSelectedhover,
    ComponentsTogglebuttongroupBorderradius,
    ComponentsTogglebuttongroupBorderWidthDefault,
    ComponentsTogglebuttongroupBorderWidthSelected,
    ComponentsTogglebuttongroupPaddinghorizontal,
    ComponentsTogglebuttongroupPaddingvertical,
    ComponentsTogglebuttongroupSmallPaddinghorizontal,
    ComponentsTogglebuttongroupSmallPaddingvertical,
    ComponentsTogglebuttongroupTextDefault,
    ComponentsTogglebuttongroupTextDisabled,
    ComponentsTogglebuttongroupTextSelected,
    ComponentsTogglebuttongroupTextSelecteddisabled,
} from '@nivoda/design-tokens';

const MuiToggleButtonGroupStyles: Components['MuiToggleButtonGroup'] = {
    styleOverrides: {
        root: {
            [`& .${toggleButtonGroupClasses.grouped}`]: {
                backgroundColor: ComponentsTogglebuttongroupBackgroundDefault,
                borderColor: ComponentsTogglebuttongroupBorderColourDefault,
                borderWidth: ComponentsTogglebuttongroupBorderWidthDefault,
                textTransform: 'none',
                color: ComponentsTogglebuttongroupTextDefault,
                padding: `${ComponentsTogglebuttongroupPaddingvertical} ${ComponentsTogglebuttongroupPaddinghorizontal}`,

                ':hover': {
                    backgroundColor: ComponentsTogglebuttongroupBackgroundHover,
                    borderColor: ComponentsTogglebuttongroupBorderColourHover,
                },

                ':disabled': {
                    borderColor: ComponentsTogglebuttongroupBorderColourDisabled,
                    color: ComponentsTogglebuttongroupTextDisabled,
                },

                '&.MuiToggleButton-sizeSmall': {
                    padding: `${ComponentsTogglebuttongroupSmallPaddingvertical} ${ComponentsTogglebuttongroupSmallPaddinghorizontal}`,
                },
            },
            [`& .${toggleButtonGroupClasses.selected}`]: {
                backgroundColor: `${ComponentsTogglebuttongroupBackgroundSelected} !important`,
                color: `${ComponentsTogglebuttongroupTextSelected} !important`,
                borderColor: ComponentsTogglebuttongroupBorderColourSelected,
                borderWidth: ComponentsTogglebuttongroupBorderWidthSelected,

                '&:hover': {
                    backgroundColor: ComponentsTogglebuttongroupBackgroundSelectedhover,
                    borderColor: ComponentsTogglebuttongroupBorderColourSelectedhover,
                },

                ':disabled': {
                    borderColor: ComponentsTogglebuttongroupBorderColourSelecteddisabled,
                    color: `${ComponentsTogglebuttongroupTextSelecteddisabled} !important`,
                },
            },
            [`& .${toggleButtonGroupClasses.firstButton}`]: {
                borderTopLeftRadius: ComponentsTogglebuttongroupBorderradius,
                borderBottomLeftRadius: ComponentsTogglebuttongroupBorderradius,
            },
            [`& .${toggleButtonGroupClasses.lastButton}`]: {
                borderTopRightRadius: ComponentsTogglebuttongroupBorderradius,
                borderBottomRightRadius: ComponentsTogglebuttongroupBorderradius,
            },
        },
    },
};

export default MuiToggleButtonGroupStyles;
