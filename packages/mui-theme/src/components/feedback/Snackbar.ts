import { paperClasses } from '@mui/material/Paper';
import { alertClasses } from '@mui/material/Alert';
import { alertTitleClasses } from '@mui/material/AlertTitle';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { buttonClasses } from '@mui/material/Button';
import { snackbarContentClasses } from '@mui/material/SnackbarContent';

const MuiSnackbarStyles = {
    styleOverrides: {
        root: {
            [`& .${paperClasses.root}`]: {
                alignItems: 'center',
                width: '100%',
            },

            [`& .${alertClasses.icon}`]: {
                alignSelf: 'flex-start',
            },

            [`& .${alertClasses.action}`]: {
                [`& .${buttonBaseClasses.root}:not(.${buttonClasses.text})`]: {
                    cursor: 'pointer',
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                },
            },

            [`& .${alertTitleClasses.root}`]: {
                margin: 0,
            },

            [`& .${snackbarContentClasses.root}`]: {
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                color: 'inherit',
                padding: 0,
            },

            [`& .${snackbarContentClasses.message}`]: {
                padding: '0',
            },
        },
    },
};

export default MuiSnackbarStyles;
