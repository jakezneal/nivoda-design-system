import tokens from '@nivoda/design-tokens';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { menuClasses } from '@mui/material/Menu';
import { menuItemClasses } from '@mui/material/MenuItem';
import { boxClasses } from '@mui/material/Box';
import { formControlLabelClasses } from '@mui/material/FormControlLabel';

const MuiMenuStyles = {
    styleOverrides: {
        defaultProps: {
            variant: 'tight',
        },
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

                // When there's not a secondary action, the container should have a hover state.
                [`&:not(:has(.${formControlLabelClasses.root})):hover`]: {
                    backgroundColor: tokens.components.list.background.item.hover,
                },

                // Override the default hover colour when there's a secondary action.
                [`&:has(.${formControlLabelClasses.root}):hover`]: {
                    backgroundColor: 'transparent',
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

            [`& .${boxClasses.root} > .${boxClasses.root}`]: {
                padding: `${tokens.components.list.padding.group.vertical} ${tokens.components.list.padding.group.horizontal}`,
            },
        },
    },
};

export default MuiMenuStyles;
