import type { Components } from '@mui/material';
import { BaseDefaultSpacing2, ComponentsTextfieldTextError } from '@nivoda/design-tokens';

const MuiFormHelperTextStyles: Components['MuiFormHelperText'] = {
    styleOverrides: {
        root: {
            marginTop: BaseDefaultSpacing2,

            '&.Mui-error': {
                color: ComponentsTextfieldTextError,
            },
        },
    },
};

export default MuiFormHelperTextStyles;
