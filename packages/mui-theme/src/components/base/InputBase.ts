import type { Components } from '@mui/material';
import tokens from '@nivoda/design-tokens';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { inputBaseClasses } from '@mui/material/InputBase';

const MuiInputBaseStyles: Components['MuiInputBase'] = {
    styleOverrides: {
        root: {
            [`&:not(.${outlinedInputClasses.root})`]: {
                backgroundColor: tokens.components.textfield.background.default,
                border: `1px solid ${tokens.components.textfield.border.default}`,
                borderRadius: tokens.components.textfield.borderradius,
                color: tokens.components.textfield.text.input,
                padding: `${tokens.components.textfield.paddingvertical} ${tokens.components.textfield.paddinghorizontal}`,
                width: '100%',
                gap: tokens.components.textfield.gap,
                input: {
                    padding: '0px',
                    height: '1.5rem',
                },
                ':hover': {
                    backgroundColor: tokens.components.textfield.background.hover,
                    borderColor: tokens.components.textfield.border.hover,
                },
                ':focus-within': {
                    backgroundColor: tokens.components.textfield.background.active,
                    borderColor: tokens.components.textfield.border.active,
                    borderSize: '1px',
                    borderStyle: 'solid',
                },
                '&.Mui-disabled': {
                    backgroundColor: tokens.components.textfield.background.disabled,
                    borderColor: tokens.components.textfield.border.disabled,
                    color: tokens.components.textfield.text.input,
                },
                '&.Mui-error': {
                    backgroundColor: tokens.components.textfield.background.error,
                    borderColor: tokens.components.textfield.border.error,
                },
                [`&.${inputBaseClasses.sizeSmall}`]: {
                    padding: `${tokens.components.textfield.small.paddingvertical} ${tokens.components.textfield.small.paddinghorizontal}`,
                },
            },
        },
        inputMultiline: {
            minHeight: '120px',
        },
        multiline: {
            alignItems: 'flex-start',
        },
    },
};

export default MuiInputBaseStyles;
