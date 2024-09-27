import type { Components } from '@mui/material';
import {
    ComponentsTextfieldBackgroundDefault,
    ComponentsTextfieldBackgroundHover,
    ComponentsTextfieldBackgroundActive,
    ComponentsTextfieldBackgroundDisabled,
    ComponentsTextfieldBackgroundError,
    ComponentsTextfieldBorderDefault,
    ComponentsTextfieldBorderHover,
    ComponentsTextfieldBorderActive,
    ComponentsTextfieldBorderDisabled,
    ComponentsTextfieldBorderError,
    ComponentsTextfieldBorderradius,
    ComponentsTextfieldTextInput,
    ComponentsTextfieldPaddinghorizontal,
    ComponentsTextfieldPaddingvertical,
    ComponentsTextfieldSmallPaddinghorizontal,
    ComponentsTextfieldSmallPaddingvertical,
    ComponentsTextfieldGap,
} from '@nivoda/design-tokens';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { inputBaseClasses } from '@mui/material/InputBase';

const MuiInputBaseStyles: Components['MuiInputBase'] = {
    styleOverrides: {
        root: {
            [`&:not(.${outlinedInputClasses.root})`]: {
                backgroundColor: ComponentsTextfieldBackgroundDefault,
                border: `1px solid ${ComponentsTextfieldBorderDefault}`,
                borderRadius: ComponentsTextfieldBorderradius,
                color: ComponentsTextfieldTextInput,
                padding: `${ComponentsTextfieldPaddingvertical} ${ComponentsTextfieldPaddinghorizontal}`,
                width: '100%',
                gap: ComponentsTextfieldGap,
                input: {
                    padding: '0px',
                    height: '1.5rem',
                },
                ':hover': {
                    backgroundColor: ComponentsTextfieldBackgroundHover,
                    borderColor: ComponentsTextfieldBorderHover,
                },
                ':focus-within': {
                    backgroundColor: ComponentsTextfieldBackgroundActive,
                    borderColor: ComponentsTextfieldBorderActive,
                    borderSize: '1px',
                    borderStyle: 'solid',
                },
                '&.Mui-disabled': {
                    backgroundColor: ComponentsTextfieldBackgroundDisabled,
                    borderColor: ComponentsTextfieldBorderDisabled,
                    color: ComponentsTextfieldTextInput,
                },
                '&.Mui-error': {
                    backgroundColor: ComponentsTextfieldBackgroundError,
                    borderColor: ComponentsTextfieldBorderError,
                },
                [`&.${inputBaseClasses.sizeSmall}`]: {
                    padding: `${ComponentsTextfieldSmallPaddingvertical} ${ComponentsTextfieldSmallPaddinghorizontal}`,
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
