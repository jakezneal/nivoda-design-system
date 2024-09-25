import type { Components } from '@mui/material';
import { circularProgressClasses } from '@mui/material/CircularProgress';

const MuiCircularProgressStyles: Components['MuiCircularProgress'] = {
    defaultProps: {
        disableShrink: true,
        size: 80,
        thickness: 8,
        variant: 'indeterminate',
    },
    styleOverrides: {
        root: {
            color: '#5620e1',

            [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: 'round',
                strokeDasharray: '14px 86px',
            },
        },
    },
};

export default MuiCircularProgressStyles;
