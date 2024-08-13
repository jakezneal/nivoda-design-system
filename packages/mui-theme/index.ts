import { createTheme } from '@mui/material/styles';
import * as tokens from '@nivoda/design-tokens';

const nivodaTheme = createTheme({
    palette: {
        primary: {
            main: tokens.ColorsNeutralBlack,
        },
    },
    spacing: [
        tokens.Spacing1,
        tokens.Spacing2,
        tokens.Spacing3,
        tokens.Spacing4,
        tokens.Spacing5,
        tokens.Spacing6,
        tokens.Spacing7,
        tokens.Spacing8,
        tokens.Spacing9,
        tokens.Spacing10,
        tokens.Spacing12,
        tokens.Spacing14,
        tokens.Spacing16,
        tokens.Spacing18,
        tokens.Spacing20,
    ],
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default nivodaTheme;
