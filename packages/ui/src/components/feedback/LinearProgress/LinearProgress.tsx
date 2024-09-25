import { LinearProgress as MuiLinearProgress, type LinearProgressProps as MuiLinearProgressProps } from '@mui/material';

export interface LinearProgressProps extends MuiLinearProgressProps {}

export const LinearProgress = ({ ...rest }: LinearProgressProps) => (
    <MuiLinearProgress variant="determinate" {...rest} />
);

export default LinearProgress;
