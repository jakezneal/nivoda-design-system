// @ts-nocheck

import tokens from '@nivoda/design-tokens';
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
                padding: 0,
            },

            [`& .${buttonBaseClasses.root}.${menuItemClasses.root}`]: {
                borderRadius: tokens.components.list.border.radius.item,
                padding: `${tokens.components.list.padding.item.vertical} ${tokens.components.list.padding.item.horizontal}`,

                svg: {
                    color: tokens.components.list.icon.end.default,
                },

                ':hover': {
                    backgroundColor: tokens.components.list.background.hover,

                    [`& .${listItemTextClasses.primary}`]: {
                        color: tokens.components.list.title.hover,
                    },

                    [`& .${listItemIconClasses.root} svg`]: {
                        color: tokens.components.list.icon.start.hover,
                    },
                },

                ':active': {
                    backgroundColor: tokens.components.list.background.active,
                },

                '&.Mui-disabled': {
                    opacity: 1,

                    svg: {
                        color: tokens.components.list.icon.end.disabled,
                    },

                    [`& .${listItemTextClasses.primary}`]: {
                        color: tokens.components.list.title.disabled,
                    },

                    [`& .${listItemTextClasses.secondary}`]: {
                        color: tokens.components.list.description.disabled,
                    },
                },

                '&.Mui-selected': {
                    backgroundColor: 'transparent',

                    svg: {
                        color: tokens.components.list.icon.end.selected,
                    },

                    [`& .${listItemTextClasses.primary}`]: {
                        color: tokens.components.list.title.selected,
                    },
                },
            },

            [`& .${listItemTextClasses.primary}`]: {
                color: tokens.components.list.title.default,
            },

            [`& .${listItemTextClasses.secondary}`]: {
                color: tokens.components.list.description.default,
            },
        },
    },
};

export default MuiMenuStyles;
