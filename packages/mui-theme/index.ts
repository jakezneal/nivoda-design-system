import { createTheme } from '@mui/material/styles';

import MuiInputBase from './src/components/base/InputBase';
import MuiFormHelperText from './src/components/base/FormHelperText';
import MuiInputLabel from './src/components/base/InputLabel';
import MuiButtonBase from './src/components/base/ButtonBase';
import MuiFormControlLabel from './src/components/base/FormControlLabel';

import MuiButton from './src/components/inputs/Button';
import MuiCheckbox from './src/components/inputs/Checkbox';
import MuiSwitch from './src/components/inputs/Switch';
import MuiToggleButtonGroup from './src/components/inputs/ToggleButtonGroup';
import MuiToggleButton from './src/components/inputs/ToggleButton';
import MuiAutocomplete from './src/components/inputs/Autocomplete';
import MuiRadio from './src/components/inputs/Radio';
import MuiSelect from './src/components/inputs/Select';
import MuiSlider from './src/components/inputs/Slider';
import MuiIconButton from './src/components/inputs/IconButton';

import MuiAlert from './src/components/feedback/Alert';
import MuiDialog from './src/components/feedback/Dialog';
import MuiSnackbar from './src/components/feedback/Snackbar';
import MuiLinearProgress from './src/components/feedback/LinearProgress';

import MuiChip from './src/components/data-display/Chip';
import MuiList from './src/components/data-display/List';
import MuiTooltip from './src/components/data-display/Tooltip';
import MuiDivider from './src/components/data-display/Divider';

import MuiPaper from './src/components/surfaces/Paper';
import MuiCard from './src/components/surfaces/Card';
import MuiAccordion from './src/components/surfaces/Accordion';

import MuiMenu from './src/components/navigation/Menu';
import MuiTabs from './src/components/navigation/Tabs';
import MuiLink from './src/components/navigation/Link';
import MuiDrawer from './src/components/navigation/Drawer';
import MuiBreadcrumbs from './src/components/navigation/Breadcrumbs';

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
        MuiChip,
        MuiPaper,
        MuiDialog,
        MuiList,
        MuiMenu,
        MuiSnackbar,
        MuiTabs,
        MuiTooltip,
        MuiLink,
        MuiRadio,
        MuiSelect,
        MuiSlider,
        MuiDrawer,
        MuiDivider,
        MuiIconButton,
        MuiFormControlLabel,
        MuiCard,
        MuiAccordion,
        MuiBreadcrumbs,
        MuiLinearProgress,
    },
    typography: {
        fontFamily: 'Inter',
    },
});

export default nivodaTheme;
