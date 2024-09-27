import type { Components } from '@mui/material';
import {
    ComponentsPaperBackground,
    ComponentsPaperBorderColour,
    ComponentsPaperBorderRadius,
} from '@nivoda/design-tokens';

const MuiPaperStyles: Components['MuiPaper'] = {
    defaultProps: {
        elevation: 0,
    },
    styleOverrides: {
        root: {
            backgroundColor: ComponentsPaperBackground,
            borderRadius: ComponentsPaperBorderRadius,
            borderColor: ComponentsPaperBorderColour,
            borderStyle: 'solid',
            borderWidth: '1px',
            padding: '8px',

            variants: [
                {
                    props: { variant: 'tight' },
                    style: {
                        padding: 0,
                    },
                },
                {
                    props: { variant: 'loose' },
                    style: {
                        padding: '16px',
                    },
                },
            ],
        },
    },
};

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        tight: true;
        loose: true;
    }
}

export default MuiPaperStyles;
