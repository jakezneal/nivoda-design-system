import type { Components } from '@mui/material';
import tokens from '@nivoda/design-tokens';

const MuiFormHelperTextStyles: Components['MuiFormHelperText'] = {
    styleOverrides: {
        root: {
            marginTop: tokens.base.default.spacing['2'],
            '&.Mui-error': {
                color: tokens.components.textfield.text.error,
            },
        },
    },
};

export default MuiFormHelperTextStyles;
