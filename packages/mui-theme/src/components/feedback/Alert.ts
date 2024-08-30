// @ts-nocheck

import tokens from '@nivoda/design-tokens';
import { alertClasses } from '@mui/material/Alert';
import { buttonBaseClasses } from '@mui/material/ButtonBase';

const MuiAlertStyles = {
    styleOverrides: {
        root: {
            borderStyle: 'solid',
            borderWidth: tokens.components.alert.border.width,
            borderRadius: tokens.components.alert.border.radius,
            padding: `${tokens.components.alert.paddingvertical} ${tokens.components.alert.paddinghorizontal}`,
            gap: tokens.components.alert.gap,

            [`& .${alertClasses.icon}`]: {
                marginRight: 0,
            },

            [`& .${alertClasses.icon}, & .${alertClasses.message}, & .${alertClasses.action}`]: {
                padding: 0,
            },

            [`& .${alertClasses.action}`]: {
                marginRight: 0,

                svg: {
                    fontSize: `calc(${tokens.components.alert.icon.size} * 2)`,
                },
            },

            [`& .${buttonBaseClasses.root}`]: {
                padding: 0,
                transition: 'none',

                '&:hover': {
                    backgroundColor: 'transparent',
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorSuccess}`]: {
                backgroundColor: tokens.components.alert.background.success,
                borderColor: tokens.components.alert.border.colour.success,
                color: tokens.components.alert.text.success,

                [`& .${alertClasses.action}`]: {
                    color: tokens.components.alert.icon.success,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorInfo}`]: {
                backgroundColor: tokens.components.alert.background.info,
                borderColor: tokens.components.alert.border.colour.info,
                color: tokens.components.alert.text.info,

                [`& .${alertClasses.action}`]: {
                    color: tokens.components.alert.icon.info,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorWarning}`]: {
                backgroundColor: tokens.components.alert.background.warning,
                borderColor: tokens.components.alert.border.colour.warning,
                color: tokens.components.alert.text.warning,

                [`& .${alertClasses.action}`]: {
                    color: tokens.components.alert.icon.warning,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorError}`]: {
                backgroundColor: tokens.components.alert.background.error,
                borderColor: tokens.components.alert.border.colour.error,
                color: tokens.components.alert.text.error,

                [`& .${alertClasses.action}`]: {
                    color: tokens.components.alert.icon.error,
                },
            },
        },
    },
};

export default MuiAlertStyles;
