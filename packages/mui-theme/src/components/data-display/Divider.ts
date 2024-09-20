import type { Components } from '@mui/material';
import { dividerClasses } from '@mui/material/Divider';
import tokens from '@nivoda/design-tokens';

const MuiDividerStyles: Components['MuiDivider'] = {
    styleOverrides: {
        root: {
            [`&.${dividerClasses.root}`]: {
                borderColor: tokens.components.divider.colour,
            },
        },
    },
};

export default MuiDividerStyles;
