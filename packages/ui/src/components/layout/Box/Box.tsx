import { Box as MuiBox, type BoxProps as MuiBoxProps } from '@mui/material';

export interface BoxProps extends MuiBoxProps {}

export const Box = ({ children, ...rest }: BoxProps) => <MuiBox {...rest}>{children}</MuiBox>;

export default Box;
