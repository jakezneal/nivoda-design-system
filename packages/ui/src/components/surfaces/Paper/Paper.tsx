import { Paper as MuiPaper, type PaperProps as MuiPaperProps } from '@mui/material';

export interface PaperProps extends MuiPaperProps {}

export const Paper = ({ children, ...rest }: PaperProps) => <MuiPaper {...rest}>{children}</MuiPaper>;

export default Paper;
