import {
    ToggleButtonGroup as MuiToggleButtonGroup,
    ToggleButton as MuiToggleButton,
    type ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';

export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {}

export const ToggleButtonGroup = ({ ...rest }: ToggleButtonGroupProps) => (
    <MuiToggleButtonGroup {...rest}>
        <MuiToggleButton value="left">Left side</MuiToggleButton>
        <MuiToggleButton value="middle">Middle</MuiToggleButton>
        <MuiToggleButton value="right">Right side</MuiToggleButton>
    </MuiToggleButtonGroup>
);

export default ToggleButtonGroup;
