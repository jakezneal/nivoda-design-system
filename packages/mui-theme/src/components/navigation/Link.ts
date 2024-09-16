// @ts-nocheck

import tokens from '@nivoda/design-tokens';

const MuiLinkStyles = {
    styleOverrides: {
        root: {
            alignItems: 'center',
            color: tokens.components.link.text.default,
            display: 'inline-flex',
            gap: tokens.components.link.spacing.gap,
            textDecorationColor: tokens.components.link.underline.default,
            textUnderlineOffset: '3px',

            svg: {
                width: '1.25em',
                height: '1.25em',
            },

            ':hover, :focus': {
                color: tokens.components.link.text.hover,
                textDecorationColor: tokens.components.link.underline.hover,
            },
        },
    },
};

export default MuiLinkStyles;
