import tokens from '@nivoda/design-tokens';

const MuiPaperStyles = {
    defaultProps: {
        elevation: 0,
    },
    styleOverrides: {
        root: {
            backgroundColor: tokens.components.paper.background,
            borderRadius: tokens.components.paper.border.radius,
            borderColor: tokens.components.paper.border.colour,
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
