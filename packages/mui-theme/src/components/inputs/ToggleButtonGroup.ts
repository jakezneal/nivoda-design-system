// @ts-nocheck

import tokens from '@nivoda/design-tokens';
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';

const MuiToggleButtonGroupStyles = {
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
};

export default MuiToggleButtonGroupStyles;
