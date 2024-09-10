import { Tooltip as MuiTooltip, type TooltipProps as MuiTooltipProps } from '@mui/material';

export interface TooltipProps extends MuiTooltipProps {}

export const Tooltip = ({ children, title, ...rest }: TooltipProps) => (
    <MuiTooltip title={title} {...rest}>
        {children}
    </MuiTooltip>
);

export default Tooltip;
