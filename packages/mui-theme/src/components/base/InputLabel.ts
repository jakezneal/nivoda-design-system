import type { Components } from '@mui/material';
import tokens from '@nivoda/design-tokens';

const MuiInputLabelStyles: Components['MuiInputLabel'] = {
    styleOverrides: {
        root: {
            color: tokens.components.textfield.text.label,
            marginBottom: tokens.base.default.spacing['2'],
        },
    },
};

export default MuiInputLabelStyles;
