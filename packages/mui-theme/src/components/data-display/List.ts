import type { Components } from '@mui/material';
import {
    ComponentsListSubheader,
    ComponentsListPaddingSubheaderVertical,
    ComponentsListPaddingSubheaderHorizontal,
    ComponentsListBackgroundItemHover,
    ComponentsListPaddingGroupVertical,
    ComponentsListPaddingGroupHorizontal,
    ComponentsListBorderRadiusItem,
    ComponentsListPaddingItemVertical,
    ComponentsListPaddingItemHorizontal,
    ComponentsListIconEndDefault,
    ComponentsListTitleHover,
    ComponentsListIconStartHover,
    ComponentsListBackgroundItemActive,
    ComponentsListTitleActive,
    ComponentsListIconStartActive,
    ComponentsListTitleDisabled,
    ComponentsListDescriptionDisabled,
    ComponentsListIconEndSelected,
    ComponentsListTitleSelected,
    ComponentsListBackgroundItemSelectedhover,
    ComponentsListBackgroundItemSelectedactive,
    ComponentsListTitleDefault,
    ComponentsListDescriptionDefault,
} from '@nivoda/design-tokens';
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
                color: ComponentsListSubheader,
                lineHeight: 1,
                padding: `${ComponentsListPaddingSubheaderVertical} ${ComponentsListPaddingSubheaderHorizontal}`,
                textTransform: 'uppercase',
            },

            [`& .${listItemClasses.root}`]: {
                padding: 0,

                // When there's not a secondary action, the container should have a hover state.
                [`&:not(:has(.${listItemSecondaryActionClasses.root})) .${buttonBaseClasses.root}.${listItemButtonClasses.root}:hover`]:
                    {
                        backgroundColor: ComponentsListBackgroundItemHover,
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
                    padding: `${ComponentsListPaddingGroupVertical} ${ComponentsListPaddingGroupHorizontal}`,
                },
            },

            [`& .${buttonBaseClasses.root}.${listItemButtonClasses.root}`]: {
                borderRadius: ComponentsListBorderRadiusItem,
                padding: `${ComponentsListPaddingItemVertical} ${ComponentsListPaddingItemHorizontal}`,
                gap: '12px',

                svg: {
                    color: ComponentsListIconEndDefault,
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
                        color: ComponentsListTitleHover,
                    },

                    [`& .${listItemIconClasses.root} svg`]: {
                        color: ComponentsListIconStartHover,
                    },
                },

                ':active': {
                    backgroundColor: ComponentsListBackgroundItemActive,

                    [`& .${listItemTextClasses.primary}`]: {
                        color: ComponentsListTitleActive,
                    },

                    [`& .${listItemIconClasses.root} svg`]: {
                        color: ComponentsListIconStartActive,
                    },
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
        },
    },
};

export default MuiListStyles;
