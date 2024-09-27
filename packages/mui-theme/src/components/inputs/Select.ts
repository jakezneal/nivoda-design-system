import type { Components } from '@mui/material';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { selectClasses } from '@mui/material/Select';
import {
    ComponentsAutocompleteBackgroundDisabled,
    ComponentsAutocompleteBorderActive,
    ComponentsAutocompleteBorderDisabled,
    ComponentsAutocompleteBorderError,
    ComponentsAutocompleteBorderHover,
    ComponentsAutocompleteBorderradius,
    ComponentsAutocompletePaddinghorizontal,
    ComponentsAutocompleteTextInput,
} from '@nivoda/design-tokens';

const MuiSelectStyles: Components['MuiSelect'] = {
    styleOverrides: {
        root: {
            borderRadius: ComponentsAutocompleteBorderradius,
            color: ComponentsAutocompleteTextInput,

            [`& .${selectClasses.icon}`]: {
                width: '16px',
                height: '16px',
                color: ComponentsAutocompleteTextInput,
            },

            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: ComponentsAutocompleteBorderActive,
                borderWidth: '1px',
            },

            [`& .${inputBaseClasses.input}`]: {
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: ComponentsAutocompletePaddinghorizontal,

                [`&:hover ~ .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: ComponentsAutocompleteBorderHover,
                },

                '&.Mui-error': {
                    [`& ~ .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: ComponentsAutocompleteBorderError,
                    },
                },

                '&.Mui-disabled': {
                    [`& ~ .${outlinedInputClasses.notchedOutline}`]: {
                        backgroundColor: ComponentsAutocompleteBackgroundDisabled,
                        borderColor: ComponentsAutocompleteBorderDisabled,
                    },
                },
            },
        },
    },
};

export default MuiSelectStyles;
