import { alertClasses } from '@mui/material/Alert';
import { buttonBaseClasses } from '@mui/material/ButtonBase';

const MuiAlertStyles = {
    styleOverrides: {
        root: {
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '8px',
            padding: '16px',
            gap: '12px',

            [`& .${alertClasses.icon}`]: {
                marginRight: 0,
            },

            [`& .${alertClasses.icon}, & .${alertClasses.message}, & .${alertClasses.action}`]: {
                padding: 0,
            },

            [`& .${alertClasses.action}`]: {
                marginRight: 0,
            },

            [`& .${buttonBaseClasses.root}`]: {
                padding: 0,
                transition: 'none',

                '&:hover': {
                    backgroundColor: 'transparent',
                },
            },

            [`&.${alertClasses.standard}.${alertClasses.colorSuccess}`]: {
                backgroundColor: '#f3faf6',
                borderColor: '#b4e4cb',
                color: '#315345',
            },

            [`&.${alertClasses.standard}.${alertClasses.colorInfo}`]: {
                backgroundColor: '#eef4ff',
                borderColor: '#bcd4ff',
                color: '#1436e1',
            },

            [`&.${alertClasses.standard}.${alertClasses.colorWarning}`]: {
                backgroundColor: '#fffbeb',
                borderColor: '#fde68a',
                color: '#78350f',
            },

            [`&.${alertClasses.standard}.${alertClasses.colorError}`]: {
                backgroundColor: '#fef2f2',
                borderColor: '#fecaca',
                color: '#991b1b',
            },
        },
    },
};

export default MuiAlertStyles;
