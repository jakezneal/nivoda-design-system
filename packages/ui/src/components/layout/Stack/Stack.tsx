import { Stack as MuiStack, type StackProps as MuiStackProps } from '@mui/material';

export interface StackProps extends MuiStackProps {}

export const Stack = ({ children, ...rest }: StackProps) => <MuiStack {...rest}>{children}</MuiStack>;

export default Stack;
