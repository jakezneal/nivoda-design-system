import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { autocompleteClasses } from '@mui/material/Autocomplete';

const MuiAutocompleteStyles = {
    styleOverrides: {
        root: {
            [`& .${inputBaseClasses.root}`]: {
                borderRadius: '8px',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '12px',

                [`& .${inputBaseClasses.input}`]: {
                    padding: 0,
                },

                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: '#9886ff',
                },

                [`&:focus-within .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: '#5620e1',
                    borderWidth: '1px',
                },

                [`&.${inputBaseClasses.sizeSmall}`]: {
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    paddingLeft: '8px',

                    [`& .${inputBaseClasses.input}`]: {
                        padding: 0,
                    },
                },

                '&.Mui-disabled': {
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: '#e7e5e4',
                    },

                    [`& .${buttonBaseClasses.root} svg path`]: {
                        stroke: '#e7e5e4',
                    },
                },

                '&.Mui-error': {
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: '#f87171',
                    },

                    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: '#ef4444',
                    },

                    [`&:focus-within .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: '#dc2626',
                    },
                },
            },
            [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: '#d6d3d1',
            },
            [`& .${autocompleteClasses.popupIndicator}`]: {
                transition: 'none',

                '&:hover': {
                    backgroundColor: 'transparent',
                },
            },
        },
    },
};

export default MuiAutocompleteStyles;
