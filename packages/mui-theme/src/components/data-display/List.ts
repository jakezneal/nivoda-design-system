import type { Components } from '@mui/material';
import tokens from '@nivoda/design-tokens';
import { listSubheaderClasses } from '@mui/material/ListSubheader';
import { listItemClasses } from '@mui/material/ListItem';
import { listItemButtonClasses } from '@mui/material/ListItemButton';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { boxClasses } from '@mui/material/Box';
import { paperClasses } from '@mui/material/Paper';
import { menuClasses } from '@mui/material/Menu';
import { listItemSecondaryActionClasses } from '@mui/material/ListItemSecondaryAction';

const MuiListStyles: Components['MuiList'] = {
    styleOverrides: {
        root: {
            [`& .${paperClasses.root}`]: {
                padding: 0,
            },

            [`& .${listSubheaderClasses.root}`]: {
                color: tokens.components.list.subheader,
                lineHeight: 1,
                padding: `${tokens.components.list.padding.subheader.vertical} ${tokens.components.list.padding.subheader.horizontal}`,
                textTransform: 'uppercase',
            },

            [`& .${listItemClasses.root}`]: {
                padding: 0,

                // When there's not a secondary action, the container should have a hover state.
                [`&:not(:has(.${listItemSecondaryActionClasses.root})) .${buttonBaseClasses.root}.${listItemButtonClasses.root}:hover`]:
                    {
                        backgroundColor: tokens.components.list.background.item.hover,
                    },

                // Override the default hover colour when there's a secondary action.
                [`&:has(.${listItemSecondaryActionClasses.root}) .${buttonBaseClasses.root}.${listItemButtonClasses.root}:hover`]:
                    {
                        backgroundColor: 'transparent',
                    },
            },

            [`& .${listItemTextClasses.root}`]: {
                margin: 0,
            },

            [`&:not(.${menuClasses.list})`]: {
                [`& .${boxClasses.root}`]: {
                    padding: `${tokens.components.list.padding.group.vertical} ${tokens.components.list.padding.group.horizontal}`,
                },
            },

            [`& .${buttonBaseClasses.root}.${listItemButtonClasses.root}`]: {
                borderRadius: tokens.components.list.border.radius.item,
                padding: `${tokens.components.list.padding.item.vertical} ${tokens.components.list.padding.item.horizontal}`,
                gap: '12px',

                svg: {
                    color: tokens.components.list.icon.end.default,
                },

                [`& .${listItemIconClasses.root}`]: {
                    minWidth: '16px',

                    svg: {
                        width: '16px',
                        height: '16px',
                    },
                },

                ':hover': {
                    [`& .${listItemTextClasses.primary}`]: {
                        color: tokens.components.list.title.hover,
                    },

                    [`& .${listItemIconClasses.root} svg`]: {
                        color: tokens.components.list.icon.start.hover,
                    },
                },

                ':active': {
                    backgroundColor: tokens.components.list.background.item.active,

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
                        color: tokens.components.list.icon.end.default,
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
                        backgroundColor: tokens.components.list.background.item.selectedhover,
                    },

                    '&:active': {
                        backgroundColor: tokens.components.list.background.item.selectedactive,
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
