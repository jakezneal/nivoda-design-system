import type { Components } from '@mui/material';
import { ComponentsTextfieldTextLabel, BaseDefaultSpacing2 } from '@nivoda/design-tokens';

const MuiInputLabelStyles: Components['MuiInputLabel'] = {
    styleOverrides: {
        root: {
            color: ComponentsTextfieldTextLabel,
            marginBottom: BaseDefaultSpacing2,
        },
    },
};

export default MuiInputLabelStyles;
