import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { menuClasses } from '@mui/material/Menu';
import { menuItemClasses } from '@mui/material/MenuItem';

const MuiMenuStyles = {
    styleOverrides: {
        root: {
            [`& .${menuClasses.paper}`]: {
                boxShadow: 'none',
            },

            [`& .${buttonBaseClasses.root}.${menuItemClasses.root}`]: {
                borderRadius: '6px',
                padding: '12px',

                ':hover': {
                    backgroundColor: '#f4f2ff',

                    [`& .${listItemTextClasses.primary}, & .${listItemIconClasses.root} svg`]: {
                        color: '#5620e1',
                    },
                },

                ':active': {
                    backgroundColor: '#e9e8ff',
                },

                svg: {
                    color: '#a8a29e',
                },

                '&.Mui-disabled': {
                    opacity: 1,

                    [`& .${listItemTextClasses.primary}, & .${listItemTextClasses.secondary}, & svg`]: {
                        color: '#a8a29e',
                    },
                },

                '&.Mui-selected': {
                    backgroundColor: 'transparent',

                    [`& .${listItemTextClasses.primary}, & svg`]: {
                        color: '#5620e1',
                    },
                },
            },

            [`& .${listItemTextClasses.primary}`]: {
                color: '#0c0a09',
            },

            [`& .${listItemTextClasses.secondary}`]: {
                color: '#44403c',
            },
        },
    },
};

export default MuiMenuStyles;
