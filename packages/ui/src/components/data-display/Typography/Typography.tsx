import { Typography as MuiTypography, Box as MuiBox, type TypographyProps as MuiTypographyProps } from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {}

export const Typography = () => (
    <MuiBox sx={{ width: '100%', maxWidth: 600 }}>
        <MuiTypography variant="h1" gutterBottom>
            h1. Heading
        </MuiTypography>
        <MuiTypography variant="h2" gutterBottom>
            h2. Heading
        </MuiTypography>
        <MuiTypography variant="h3" gutterBottom>
            h3. Heading
        </MuiTypography>
        <MuiTypography variant="h4" gutterBottom>
            h4. Heading
        </MuiTypography>
        <MuiTypography variant="h5" gutterBottom>
            h5. Heading
        </MuiTypography>
        <MuiTypography variant="h6" gutterBottom>
            h6. Heading
        </MuiTypography>
        <MuiTypography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </MuiTypography>
        <MuiTypography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </MuiTypography>
        <MuiTypography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
        </MuiTypography>
        <MuiTypography variant="button" gutterBottom sx={{ display: 'block' }}>
            button text
        </MuiTypography>
        <MuiTypography variant="caption" gutterBottom sx={{ display: 'block' }}>
            caption text
        </MuiTypography>
        <MuiTypography variant="overline" gutterBottom sx={{ display: 'block' }}>
            overline text
        </MuiTypography>
    </MuiBox>
);

export default Typography;
