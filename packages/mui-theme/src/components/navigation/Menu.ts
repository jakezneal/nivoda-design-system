import type { Components } from '@mui/material';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { menuClasses } from '@mui/material/Menu';
import { menuItemClasses } from '@mui/material/MenuItem';
import { boxClasses } from '@mui/material/Box';
import { formControlLabelClasses } from '@mui/material/FormControlLabel';
import {
    ComponentsListBackgroundItemActive,
    ComponentsListBackgroundItemHover,
    ComponentsListBackgroundItemSelectedactive,
    ComponentsListBackgroundItemSelectedhover,
    ComponentsListBorderRadiusItem,
    ComponentsListDescriptionDefault,
    ComponentsListDescriptionDisabled,
    ComponentsListIconEndDefault,
    ComponentsListIconEndSelected,
    ComponentsListIconStartHover,
    ComponentsListPaddingGroupHorizontal,
    ComponentsListPaddingGroupVertical,
    ComponentsListPaddingItemHorizontal,
    ComponentsListPaddingItemVertical,
    ComponentsListTitleDefault,
    ComponentsListTitleDisabled,
    ComponentsListTitleHover,
    ComponentsListTitleSelected,
} from '@nivoda/design-tokens';

const MuiMenuStyles: Components['MuiMenu'] = {
    styleOverrides: {
        root: {
            [`& .${menuClasses.paper}`]: {
                boxShadow: 'none',
                padding: 0,
            },

            [`& .${buttonBaseClasses.root}.${menuItemClasses.root}`]: {
                borderRadius: ComponentsListBorderRadiusItem,
                padding: `${ComponentsListPaddingItemVertical} ${ComponentsListPaddingItemHorizontal}`,

                svg: {
                    color: ComponentsListIconEndDefault,
                },

                // When there's not a secondary action, the container should have a hover state.
                [`&:not(:has(.${formControlLabelClasses.root})):hover`]: {
                    backgroundColor: ComponentsListBackgroundItemHover,
                },

                // Override the default hover colour when there's a secondary action.
                [`&:has(.${formControlLabelClasses.root}):hover`]: {
                    backgroundColor: 'transparent',
                },

                ':hover': {
                    [`& .${listItemTextClasses.primary}`]: {
                        color: ComponentsListTitleHover,
                    },

                    [`& .${listItemIconClasses.root} svg`]: {
                        color: ComponentsListIconStartHover,
                    },
                },

                ':active': {
                    backgroundColor: ComponentsListBackgroundItemActive,
                },

                '&.Mui-disabled': {
                    opacity: 1,

                    svg: {
                        color: ComponentsListIconEndDefault,
                    },

                    [`& .${listItemTextClasses.primary}`]: {
                        color: ComponentsListTitleDisabled,
                    },

                    [`& .${listItemTextClasses.secondary}`]: {
                        color: ComponentsListDescriptionDisabled,
                    },
                },

                '&.Mui-selected': {
                    backgroundColor: 'transparent',

                    svg: {
                        color: ComponentsListIconEndSelected,
                    },

                    [`& .${listItemTextClasses.primary}`]: {
                        color: ComponentsListTitleSelected,
                    },

                    ':hover': {
                        backgroundColor: ComponentsListBackgroundItemSelectedhover,
                    },

                    '&:active': {
                        backgroundColor: ComponentsListBackgroundItemSelectedactive,
                    },
                },
            },

            [`& .${listItemTextClasses.primary}`]: {
                color: ComponentsListTitleDefault,
            },

            [`& .${listItemTextClasses.secondary}`]: {
                color: ComponentsListDescriptionDefault,
            },

            [`& .${boxClasses.root} > .${boxClasses.root}`]: {
                padding: `${ComponentsListPaddingGroupVertical} ${ComponentsListPaddingGroupHorizontal}`,
            },
        },
    },
};

export default MuiMenuStyles;
