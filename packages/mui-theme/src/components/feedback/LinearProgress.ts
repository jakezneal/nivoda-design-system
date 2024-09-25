import type { Components } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';

const MuiLinearProgressStyles: Components['MuiLinearProgress'] = {
    styleOverrides: {
        root: {
            [`&.${linearProgressClasses.root}`]: {
                backgroundColor: '#e7e5e4',
                borderRadius: '8px',
                height: '8px',
            },

            [`& .${linearProgressClasses.barColorPrimary}`]: {
                backgroundColor: '#5620e1',
            },

            '& .MuiLinearProgress-barColorError': {
                backgroundColor: '#b91c1c',
            },

            '& .MuiLinearProgress-barColorSuccess': {
                backgroundColor: '#479570',
            },
        },
    },
};

export default MuiLinearProgressStyles;
