import type { Components } from '@mui/material';
import {
    ComponentsTooltipBackground,
    ComponentsTooltipBorderRadius,
    ComponentsTooltipPaddingHorizontal,
    ComponentsTooltipPaddingVertical,
} from '@nivoda/design-tokens';

const MuiTooltipStyles: Components['MuiTooltip'] = {
    styleOverrides: {
        tooltip: {
            backgroundColor: ComponentsTooltipBackground,
            borderRadius: ComponentsTooltipBorderRadius,
            padding: `${ComponentsTooltipPaddingVertical} ${ComponentsTooltipPaddingHorizontal}`,
        },
    },
};

export default MuiTooltipStyles;
