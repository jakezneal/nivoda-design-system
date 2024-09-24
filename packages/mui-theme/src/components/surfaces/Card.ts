import type { Components } from '@mui/material';
import { cardActionsClasses } from '@mui/material/CardActions';
import { cardContentClasses } from '@mui/material/CardContent';

const MuiCardStyles: Components['MuiCard'] = {
    styleOverrides: {
        root: {
            [`& .${cardActionsClasses.root}`]: {
                padding: 12,
            },

            [`& .${cardContentClasses.root}`]: {
                padding: 12,

                '&:last-child': {
                    paddingBottom: 12,
                },
            },
        },
    },
};

export default MuiCardStyles;
