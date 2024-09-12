import { tabsClasses } from '@mui/material/Tabs';
import { tabClasses } from '@mui/material/Tab';
import { badgeClasses } from '@mui/material/Badge';

const MuiTabsStyles = {
    styleOverrides: {
        root: {
            [`& .${tabsClasses.flexContainer}`]: {
                borderBottom: '1px solid #E7E5E4',
            },

            [`& .${tabsClasses.indicator}`]: {
                backgroundColor: '#5620e1',
            },

            [`& .${tabClasses.root}`]: {
                color: '#44403c',
                textTransform: 'none',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: '8px',

                ':hover': {
                    color: '#5620e1',
                },

                '&.Mui-selected': {
                    color: '#5620e1',

                    ':hover': {
                        color: '#7655fd',
                    },
                },
            },

            [`& .${badgeClasses.badge}`]: {
                position: 'relative',
                transform: 'none',
            },
        },
    },
};

export default MuiTabsStyles;
