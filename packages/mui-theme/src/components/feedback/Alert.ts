import type { Components } from '@mui/material';
import { alertClasses } from '@mui/material/Alert';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { alertTitleClasses } from '@mui/material/AlertTitle';
import {
    ComponentsAlertBackgroundError,
    ComponentsAlertBackgroundInfo,
    ComponentsAlertBackgroundSuccess,
    ComponentsAlertBackgroundWarning,
    ComponentsAlertBorderColourError,
    ComponentsAlertBorderColourInfo,
    ComponentsAlertBorderColourSuccess,
    ComponentsAlertBorderColourWarning,
    ComponentsAlertBorderRadius,
    ComponentsAlertBorderWidth,
    ComponentsAlertGap,
    ComponentsAlertIconColourError,
    ComponentsAlertIconColourInfo,
    ComponentsAlertIconColourSuccess,
    ComponentsAlertIconColourWarning,
    ComponentsAlertIconSize,
    ComponentsAlertPaddinghorizontal,
    ComponentsAlertPaddingvertical,
    ComponentsAlertTextError,
    ComponentsAlertTextInfo,
    ComponentsAlertTextSuccess,
    ComponentsAlertTextWarning,
} from '@nivoda/design-tokens';

const MuiAlertStyles: Components['MuiAlert'] = {
    styleOverrides: {
        root: {
            [`&.${alertClasses.root}`]: {
                borderWidth: ComponentsAlertBorderWidth,
                borderRadius: ComponentsAlertBorderRadius,
                padding: `${ComponentsAlertPaddingvertical} ${ComponentsAlertPaddinghorizontal}`,
                gap: ComponentsAlertGap,
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
                    fontSize: `calc(${ComponentsAlertIconSize} * 2)`,
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
                backgroundColor: ComponentsAlertBackgroundSuccess,
                borderColor: ComponentsAlertBorderColourSuccess,
                color: ComponentsAlertTextSuccess,

                [`& .${alertClasses.action}`]: {
                    color: ComponentsAlertIconColourSuccess,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorInfo}`]: {
                backgroundColor: ComponentsAlertBackgroundInfo,
                borderColor: ComponentsAlertBorderColourInfo,
                color: ComponentsAlertTextInfo,

                [`& .${alertClasses.action}`]: {
                    color: ComponentsAlertIconColourInfo,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorWarning}`]: {
                backgroundColor: ComponentsAlertBackgroundWarning,
                borderColor: ComponentsAlertBorderColourWarning,
                color: ComponentsAlertTextWarning,

                [`& .${alertClasses.action}`]: {
                    color: ComponentsAlertIconColourWarning,
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorError}`]: {
                backgroundColor: ComponentsAlertBackgroundError,
                borderColor: ComponentsAlertBorderColourError,
                color: ComponentsAlertTextError,

                [`& .${alertClasses.action}`]: {
                    color: ComponentsAlertIconColourError,
                },
            },
        },
    },
};

export default MuiAlertStyles;
