// @ts-nocheck

import tokens from '@nivoda/design-tokens';
import { chipClasses } from '@mui/material/Chip';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { svgIconClasses } from '@mui/material/SvgIcon';

const MuiChipStyles = {
    styleOverrides: {
        root: {
            backgroundColor: tokens.components.chip.background.default,
            color: tokens.components.chip.text.default,
            transition: 'none',

            [`.${buttonBaseClasses.root}&`]: {
                [`&.${chipClasses.clickable}`]: {
                    '&:hover': {
                        backgroundColor: tokens.components.chip.background.hover,
                    },

                    '&:active': {
                        backgroundColor: tokens.components.chip.background.active,
                        boxShadow: 'none',
                    },

                    [`& .${svgIconClasses.root}`]: {
                        '&:hover': {
                            // TODO: Needs hooking up to design tokens
                            opacity: 0.5,
                        },
                    },
                },
            },

            [`& .${svgIconClasses.root}`]: {
                fill: tokens.components.chip.icon.default,
                // TODO: Needs hooking up to design tokens
                opacity: 0.2,
            },
        },
    },
};

export default MuiChipStyles;
