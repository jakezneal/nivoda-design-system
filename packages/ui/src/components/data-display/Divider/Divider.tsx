import { Divider as MuiDivider, type DividerProps as MuiDividerProps } from '@mui/material';

export interface DividerProps extends MuiDividerProps {}

export const Divider = ({ ...rest }: DividerProps) => <MuiDivider {...rest} />;

export default Divider;
