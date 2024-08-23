import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {}

export const Button = ({ children, ...rest }: ButtonProps) => <MuiButton {...rest}>{children}</MuiButton>;

export default Button;
