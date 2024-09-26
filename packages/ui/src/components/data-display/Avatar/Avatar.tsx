import { Avatar as MuiAvatar, type AvatarProps as MuiAvatarProps } from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {}

export const Avatar = ({ children, ...rest }: AvatarProps) => <MuiAvatar {...rest}>{children}</MuiAvatar>;

export default Avatar;
