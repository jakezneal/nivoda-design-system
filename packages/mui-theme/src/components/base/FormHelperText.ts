// @ts-nocheck

import tokens from '@nivoda/design-tokens';

const MuiFormHelperTextStyles = {
    styleOverrides: {
        root: {
            marginTop: tokens.base.default.spacing['2'],
            '&.Mui-error': {
                color: tokens.components.textfield.text.error.text,
            },
        },
    },
};

export default MuiFormHelperTextStyles;
