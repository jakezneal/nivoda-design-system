// @ts-nocheck

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
        },
    },
};

export default MuiPaperStyles;
