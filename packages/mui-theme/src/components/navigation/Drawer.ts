import type { Components } from '@mui/material';
import { drawerClasses } from '@mui/material/Drawer';

const MuiDrawerStyles: Components['MuiDrawer'] = {
    defaultProps: {
        elevation: 0,
    },
    styleOverrides: {
        root: {
            [`& .${drawerClasses.paper}`]: {
                borderRadius: '16px',
            },
        },
    },
};

export default MuiDrawerStyles;
