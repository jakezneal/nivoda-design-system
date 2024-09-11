import { Popover as MuiPopover, type PopoverProps as MuiPopoverProps } from '@mui/material';

export interface PopoverProps extends MuiPopoverProps {}

export const Popover = ({ children, ...rest }: PopoverProps) => <MuiPopover {...rest}>{children}</MuiPopover>;

export default Popover;
