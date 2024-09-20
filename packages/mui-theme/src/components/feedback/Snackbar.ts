import type { Components } from '@mui/material';
import { paperClasses } from '@mui/material/Paper';

const MuiSnackbarStyles: Components['MuiSnackbar'] = {
    styleOverrides: {
        root: {
            maxWidth: '450px',
            width: '100%',

            svg: {
                width: '32px',
                height: '32px',
            },

            [`& .${paperClasses.root}`]: {
                borderColor: '#f1f1f1',
                boxShadow: '#0000000d 0px 1px 2px',
                color: '#78716c',
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
            },

            '&.MuiSnackbar-colourSuccess .MuiSnackbar-icon': {
                color: '#479570',
            },

            '&.MuiSnackbar-colourInfo .MuiSnackbar-icon': {
                color: '#326cff',
            },

            '&.MuiSnackbar-colourWarning .MuiSnackbar-icon': {
                color: '#f59e0b',
            },

            '&.MuiSnackbar-colourError .MuiSnackbar-icon': {
                color: '#dc2626',
            },

            '.MuiSnackbar-content': {
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            },

            '.MuiSnackbar-message': {
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
            },

            '.MuiSnackbar-title': {
                color: '#0c0a09',
            },

            '.MuiSnackbar-description': {
                color: '#78716c',
            },
        },
    },
};

export default MuiSnackbarStyles;
