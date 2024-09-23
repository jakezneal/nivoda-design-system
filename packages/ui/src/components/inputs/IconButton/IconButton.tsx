import { IconButton as MuiIconButton, type IconButtonProps as MuiIconButtonProps } from '@mui/material';

export interface IconButtonProps extends MuiIconButtonProps {}

export const IconButton = ({ children, ...rest }: IconButtonProps) => (
    <MuiIconButton {...rest}>{children}</MuiIconButton>
);

export default IconButton;
