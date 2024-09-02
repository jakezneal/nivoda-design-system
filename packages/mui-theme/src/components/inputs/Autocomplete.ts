// @ts-nocheck

import tokens from '@nivoda/design-tokens';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { autocompleteClasses } from '@mui/material/Autocomplete';

const MuiAutocompleteStyles = {
    styleOverrides: {
        root: {
            [`& .${inputBaseClasses.root}`]: {
                borderRadius: tokens.components.autocomplete.borderradius,
                color: tokens.components.autocomplete.text.input,
                paddingTop: tokens.components.autocomplete.paddingVertical,
                paddingBottom: tokens.components.autocomplete.paddingVertical,
                paddingLeft: tokens.components.autocomplete.paddingHorizontal,

                [`& .${inputBaseClasses.input}`]: {
                    height: '30px',
                    padding: 0,
                },

                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: tokens.components.autocomplete.border.hover,
                },

                [`&:focus-within .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: tokens.components.autocomplete.border.active,
                    borderWidth: '1px',
                },

                [`&.${inputBaseClasses.sizeSmall}`]: {
                    paddingTop: tokens.components.autocomplete.small.paddingVertical,
                    paddingBottom: tokens.components.autocomplete.small.paddingVertical,
                    paddingLeft: tokens.components.autocomplete.small.paddingHorizontal,

                    [`& .${inputBaseClasses.input}`]: {
                        padding: 0,
                    },
                },

                [`& .${buttonBaseClasses.root} svg path`]: {
                    stroke: tokens.components.autocomplete.text.input,
                },

                '&.Mui-disabled': {
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        backgroundColor: tokens.components.autocomplete.background.disabled,
                        borderColor: tokens.components.autocomplete.border.disabled,
                    },
                },

                '&.Mui-error': {
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: tokens.components.autocomplete.border.error,
                    },
                },
            },
            [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: tokens.components.autocomplete.border.default,
            },
            [`& .${autocompleteClasses.popupIndicator}`]: {
                transition: 'none',

                '&:hover': {
                    backgroundColor: 'transparent',
                },
            },
            [`& .${autocompleteClasses.endAdornment}`]: {
                zIndex: 1,
            },
        },
    },
};

export default MuiAutocompleteStyles;
