import type { Components } from '@mui/material';

const MuiFormControlLabelStyles: Components['MuiFormControlLabel'] = {
    styleOverrides: {
        root: {
            gap: '8px',
            margin: 0,
        },
    },
};

export default MuiFormControlLabelStyles;
