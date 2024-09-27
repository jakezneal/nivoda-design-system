import type { Components } from '@mui/material';
import {
    ComponentsChipBackgroundDefault,
    ComponentsChipTextDefault,
    ComponentsChipIconDefault,
    ComponentsChipBackgroundHover,
    ComponentsChipBackgroundActive,
} from '@nivoda/design-tokens';
import { chipClasses } from '@mui/material/Chip';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { svgIconClasses } from '@mui/material/SvgIcon';

const MuiChipStyles: Components['MuiChip'] = {
    styleOverrides: {
        root: {
            backgroundColor: ComponentsChipBackgroundDefault,
            color: ComponentsChipTextDefault,
            transition: 'none',

            [`.${buttonBaseClasses.root}&`]: {
                [`&.${chipClasses.clickable}`]: {
                    '&:hover': {
                        backgroundColor: ComponentsChipBackgroundHover,
                    },

                    '&:active': {
                        backgroundColor: ComponentsChipBackgroundActive,
                        boxShadow: 'none',
                    },
                },
            },

            [`& .${svgIconClasses.root}`]: {
                fill: ComponentsChipIconDefault,
                // TODO: Needs hooking up to design tokens
                opacity: 0.2,

                '&:hover': {
                    // TODO: Needs hooking up to design tokens
                    opacity: 0.5,
                },
            },
        },
    },
};

export default MuiChipStyles;
