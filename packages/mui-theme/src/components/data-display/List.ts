// @ts-nocheck

import tokens from '@nivoda/design-tokens';
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
                color: tokens.components.list.subheader.default,
                lineHeight: 1,
                padding: `${tokens.components.list.subheader.padding.vertical} ${tokens.components.list.subheader.padding.horizontal}`,
                textTransform: 'uppercase',
            },

            [`&. ${listItemButtonClasses.root}`]: {
                padding: `${tokens.components.list.item.padding.vertical} ${tokens.components.list.item.padding.horizontal}`,
            },

            [`& .${listItemClasses.root}`]: {
                padding: 0,
            },

            [`& .${listItemTextClasses.root}`]: {
                margin: 0,
            },

            [`& .${boxClasses.root}`]: {
                padding: `${tokens.components.list.group.padding.vertical} ${tokens.components.list.group.padding.horizontal}`,
            },

            [`& .${buttonBaseClasses.root}.${listItemButtonClasses.root}`]: {
                borderRadius: tokens.components.list.border.radius.item,

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

                    [`& .${listItemTextClasses.primary}`]: {
                        color: tokens.components.list.title.active,
                    },

                    [`& .${listItemIconClasses.root} svg`]: {
                        color: tokens.components.list.icon.start.active,
                    },
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

                    ':hover': {
                        backgroundColor: tokens.components.list.background.hover,
                    },

                    '&:active': {
                        backgroundColor: tokens.components.list.background.active,
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

export default MuiListStyles;
