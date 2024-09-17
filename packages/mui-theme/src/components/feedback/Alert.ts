// @ts-nocheck

import tokens from '@nivoda/design-tokens';
import { alertClasses } from '@mui/material/Alert';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { alertTitleClasses } from '@mui/material/AlertTitle';

const MuiAlertStyles = {
    styleOverrides: {
        root: {
            [`&.${alertClasses.root}`]: {
                borderWidth: tokens.components.alert.border.width,
                borderRadius: tokens.components.alert.border.radius,
                padding: `${tokens.components.alert.paddingvertical} ${tokens.components.alert.paddinghorizontal}`,
                gap: tokens.components.alert.gap,
                position: 'relative',
            },

            [`& .${alertClasses.icon}`]: {
                marginRight: 0,

                svg: {
                    width: '16px',
                    height: '16px',
                },
            },

            [`& .${alertClasses.icon}, & .${alertClasses.message}, & .${alertClasses.action}`]: {
                padding: 0,
            },

            [`& .${alertTitleClasses.root}`]: {
                marginBottom: 0,
            },

            [`& .${alertClasses.action}`]: {
                marginRight: 0,
                position: 'absolute',
                right: '13px',
                top: '13px',

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
                    color: tokens.components.alert.icon.colour.success,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorInfo}`]: {
                backgroundColor: tokens.components.alert.background.info,
                borderColor: tokens.components.alert.border.colour.info,
                color: tokens.components.alert.text.info,

                [`& .${alertClasses.action}`]: {
                    color: tokens.components.alert.icon.colour.info,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorWarning}`]: {
                backgroundColor: tokens.components.alert.background.warning,
                borderColor: tokens.components.alert.border.colour.warning,
                color: tokens.components.alert.text.warning,

                [`& .${alertClasses.action}`]: {
                    color: tokens.components.alert.icon.colour.warning,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorError}`]: {
                backgroundColor: tokens.components.alert.background.error,
                borderColor: tokens.components.alert.border.colour.error,
                color: tokens.components.alert.text.error,

                [`& .${alertClasses.action}`]: {
                    color: tokens.components.alert.icon.colour.error,
                },
            },
        },
    },
};

export default MuiAlertStyles;
