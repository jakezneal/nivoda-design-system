import type { Components } from '@mui/material';
import tokens from '@nivoda/design-tokens';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { selectClasses } from '@mui/material/Select';

const MuiSelectStyles: Components['MuiSelect'] = {
    styleOverrides: {
        root: {
            borderRadius: tokens.components.autocomplete.borderradius,
            color: tokens.components.autocomplete.text.input,

            [`& .${selectClasses.icon}`]: {
                width: '16px',
                height: '16px',
                color: tokens.components.autocomplete.text.input,
            },

            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: tokens.components.autocomplete.border.active,
                borderWidth: '1px',
            },

            [`& .${inputBaseClasses.input}`]: {
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: tokens.components.autocomplete.paddinghorizontal,

                [`&:hover ~ .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: tokens.components.autocomplete.border.hover,
                },

                '&.Mui-error': {
                    [`& ~ .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: tokens.components.autocomplete.border.error,
                    },
                },

                '&.Mui-disabled': {
                    [`& ~ .${outlinedInputClasses.notchedOutline}`]: {
                        backgroundColor: tokens.components.autocomplete.background.disabled,
                        borderColor: tokens.components.autocomplete.border.disabled,
                    },
                },
            },
        },
    },
};

export default MuiSelectStyles;
