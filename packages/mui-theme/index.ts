import { createTheme } from '@mui/material/styles';
import * as tokens from '@nivoda/design-tokens';

const nivodaTheme = createTheme({
    palette: {
        primary: {
            main: tokens.ColorsNeutralBlack,
        },
    },
});

export default nivodaTheme;
