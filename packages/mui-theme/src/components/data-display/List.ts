import { listClasses } from '@mui/material/List';
import { listSubheaderClasses } from '@mui/material/ListSubheader';
import { listItemClasses } from '@mui/material/ListItem';
import { listItemButtonClasses } from '@mui/material/ListItemButton';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { boxClasses } from '@mui/material/Box';

const MuiListStyles = {
    styleOverrides: {
        root: {
            [`& .${listSubheaderClasses.root}`]: {
                color: '#78716C',
                lineHeight: 1,
                padding: '8px 12px',
                textTransform: 'uppercase',
            },

            [`&. ${listItemButtonClasses.root}`]: {
                padding: '12px',
            },

            [`& .${listItemClasses.root}`]: {
                padding: 0,
            },

            [`& .${listItemTextClasses.root}`]: {
                margin: 0,
            },

            [`& .${boxClasses.root}`]: {
                padding: '8px',
            },

            [`& .${buttonBaseClasses.root}.${listItemButtonClasses.root}`]: {
                borderRadius: '6px',

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

                    ':hover': {
                        backgroundColor: '#f4f2ff',
                    },

                    '&:active': {
                        backgroundColor: '#e9e8ff',
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

export default MuiListStyles;
