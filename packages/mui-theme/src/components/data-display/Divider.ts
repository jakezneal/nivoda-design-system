import type { Components } from '@mui/material';
import { dividerClasses } from '@mui/material/Divider';
import { ComponentsDividerColour } from '@nivoda/design-tokens';

const MuiDividerStyles: Components['MuiDivider'] = {
    styleOverrides: {
        root: {
            [`&.${dividerClasses.root}`]: {
                borderColor: ComponentsDividerColour,
            },
        },
    },
};

export default MuiDividerStyles;
