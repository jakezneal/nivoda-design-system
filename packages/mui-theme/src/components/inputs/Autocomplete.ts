import type { Components } from '@mui/material';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { chipClasses } from '@mui/material/Chip';
import {
    ComponentsAutocompleteBackgroundDisabled,
    ComponentsAutocompleteBorderActive,
    ComponentsAutocompleteBorderDisabled,
    ComponentsAutocompleteBorderError,
    ComponentsAutocompleteBorderHover,
    ComponentsAutocompleteBorderradius,
    ComponentsAutocompletePaddinghorizontal,
    ComponentsAutocompletePaddingvertical,
    ComponentsAutocompleteSmallPaddinghorizontal,
    ComponentsAutocompleteSmallPaddingvertical,
    ComponentsAutocompleteTextInput,
    ComponentsChipBackgroundActive,
    ComponentsChipBackgroundHover,
} from '@nivoda/design-tokens';

const MuiAutocompleteStyles: Components['MuiAutocomplete'] = {
    styleOverrides: {
        root: {
            [`& .${inputBaseClasses.root}`]: {
                borderRadius: ComponentsAutocompleteBorderradius,
                color: ComponentsAutocompleteTextInput,
                paddingTop: ComponentsAutocompletePaddingvertical,
                paddingBottom: ComponentsAutocompletePaddingvertical,
                paddingLeft: ComponentsAutocompletePaddinghorizontal,

                [`& .${inputBaseClasses.input}`]: {
                    height: '30px',
                    padding: 0,
                },

                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: ComponentsAutocompleteBorderHover,
                },

                [`&:focus-within .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: ComponentsAutocompleteBorderActive,
                    borderWidth: '1px',
                },

                [`&.${inputBaseClasses.sizeSmall}`]: {
                    paddingTop: ComponentsAutocompleteSmallPaddingvertical,
                    paddingBottom: ComponentsAutocompleteSmallPaddingvertical,
                    paddingLeft: ComponentsAutocompleteSmallPaddinghorizontal,

                    [`& .${inputBaseClasses.input}`]: {
                        padding: 0,
                    },
                },

                '&.Mui-disabled': {
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        backgroundColor: ComponentsAutocompleteBackgroundDisabled,
                        borderColor: ComponentsAutocompleteBorderDisabled,
                    },
                },

                '&.Mui-error': {
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: ComponentsAutocompleteBorderError,
                    },
                },
            },

            [`& .${autocompleteClasses.endAdornment}`]: {
                zIndex: 1,

                [`& .${autocompleteClasses.popupIndicator}`]: {
                    transition: 'none',

                    svg: {
                        width: '16px',
                        height: '16px',
                        color: ComponentsAutocompleteTextInput,
                    },

                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },
            },

            [`& .${chipClasses.root}`]: {
                '&:hover': {
                    backgroundColor: ComponentsChipBackgroundHover,
                },

                '&:active': {
                    backgroundColor: ComponentsChipBackgroundActive,
                    boxShadow: 'none',
                },
            },
        },
    },
};

export default MuiAutocompleteStyles;
