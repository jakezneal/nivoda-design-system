import {
    CircularProgress as MuiCircularProgress,
    type CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

export interface CircularProgressProps extends MuiCircularProgressProps {}

export const CircularProgress = ({ ...rest }: CircularProgressProps) => <MuiCircularProgress {...rest} />;

export default CircularProgress;
