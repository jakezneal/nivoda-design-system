import type { Components } from '@mui/material';
import tokens from '@nivoda/design-tokens';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { chipClasses } from '@mui/material/Chip';

const MuiAutocompleteStyles: Components['MuiAutocomplete'] = {
    styleOverrides: {
        root: {
            [`& .${inputBaseClasses.root}`]: {
                borderRadius: tokens.components.autocomplete.borderradius,
                color: tokens.components.autocomplete.text.input,
                paddingTop: tokens.components.autocomplete.paddingvertical,
                paddingBottom: tokens.components.autocomplete.paddingvertical,
                paddingLeft: tokens.components.autocomplete.paddinghorizontal,

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
                    paddingTop: tokens.components.autocomplete.small.paddingvertical,
                    paddingBottom: tokens.components.autocomplete.small.paddingvertical,
                    paddingLeft: tokens.components.autocomplete.small.paddinghorizontal,

                    [`& .${inputBaseClasses.input}`]: {
                        padding: 0,
                    },
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

            [`& .${autocompleteClasses.endAdornment}`]: {
                zIndex: 1,

                [`& .${autocompleteClasses.popupIndicator}`]: {
                    transition: 'none',

                    svg: {
                        width: '16px',
                        height: '16px',
                        color: tokens.components.autocomplete.text.input,
                    },

                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },
            },

            [`& .${chipClasses.root}`]: {
                '&:hover': {
                    backgroundColor: tokens.components.chip.background.hover,
                },

                '&:active': {
                    backgroundColor: tokens.components.chip.background.active,
                    boxShadow: 'none',
                },
            },
        },
    },
};

export default MuiAutocompleteStyles;
