import { Link as MuiLink, type LinkProps as MuiLinkProps } from '@mui/material';

export interface LinkProps extends MuiLinkProps {}

export const Link = ({ children, href, ...rest }: LinkProps) => (
    <MuiLink href={href} {...rest}>
        {children}
    </MuiLink>
);

export default Link;
