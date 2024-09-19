import { Drawer as MuiDrawer, type DrawerProps as MuiDrawerProps } from '@mui/material';

export interface DrawerProps extends MuiDrawerProps {}

export const Drawer = ({ children, ...rest }: DrawerProps) => (
    <MuiDrawer PaperProps={{ variant: 'tight' }} {...rest}>
        {children}
    </MuiDrawer>
);

export default Drawer;
