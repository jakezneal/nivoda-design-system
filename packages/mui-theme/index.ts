import { createTheme } from '@mui/material/styles';

import MuiInputBase from './src/components/base/InputBase';
import MuiFormHelperText from './src/components/base/FormHelperText';
import MuiInputLabel from './src/components/base/InputLabel';
import MuiButtonBase from './src/components/base/ButtonBase';

import MuiButton from './src/components/inputs/Button';
import MuiCheckbox from './src/components/inputs/Checkbox';
import MuiSwitch from './src/components/inputs/Switch';
import MuiToggleButtonGroup from './src/components/inputs/ToggleButtonGroup';
import MuiToggleButton from './src/components/inputs/ToggleButton';
import MuiAutocomplete from './src/components/inputs/Autocomplete';

import MuiAlert from './src/components/feedback/Alert';

const nivodaTheme = createTheme({
    components: {
        MuiButton,
        MuiInputBase,
        MuiFormHelperText,
        MuiInputLabel,
        MuiCheckbox,
        MuiSwitch,
        MuiToggleButtonGroup,
        MuiToggleButton,
        MuiAutocomplete,
        MuiButtonBase,
        MuiAlert,
    },
    typography: {
        fontFamily: 'Inter',
    },
});

export default nivodaTheme;
