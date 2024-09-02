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

            [`.${buttonBaseClasses.root}&`]: {
                [`&.${chipClasses.root}`]: {
                    '&:hover': {
                        backgroundColor: tokens.components.chip.background.hover,
                    },

                    '&:active': {
                        backgroundColor: tokens.components.chip.background.active,
                        boxShadow: 'none',
                    },
                },
            },

            [`& .${svgIconClasses.root}`]: {
                '&, &:hover': {
                    fill: tokens.components.chip.icon.default,
                },
            },
        },
    },
};

export default MuiChipStyles;
