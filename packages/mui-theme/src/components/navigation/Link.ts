import type { Components } from '@mui/material';
import {
    ComponentsLinkSpacingGap,
    ComponentsLinkTextDefault,
    ComponentsLinkTextHover,
    ComponentsLinkUnderlineDefault,
    ComponentsLinkUnderlineHover,
} from '@nivoda/design-tokens';

const MuiLinkStyles: Components['MuiLink'] = {
    styleOverrides: {
        root: {
            alignItems: 'center',
            color: ComponentsLinkTextDefault,
            display: 'inline-flex',
            gap: ComponentsLinkSpacingGap,
            textDecorationColor: ComponentsLinkUnderlineDefault,
            textUnderlineOffset: '3px',

            svg: {
                width: '1em',
                height: '1em',
            },

            ':hover, :focus': {
                color: ComponentsLinkTextHover,
                textDecorationColor: ComponentsLinkUnderlineHover,
            },
        },
    },
};

export default MuiLinkStyles;
