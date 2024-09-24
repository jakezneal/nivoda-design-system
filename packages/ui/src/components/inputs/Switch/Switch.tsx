import {
    Switch as MuiSwitch,
    FormControlLabel as MuiFormControlLabel,
    type SwitchProps as MuiSwitchProps,
} from '@mui/material';

export interface SwitchProps extends MuiSwitchProps {
    label: React.ReactNode;
}

export const Switch = ({ label, ...rest }: SwitchProps) => (
    <MuiFormControlLabel control={<MuiSwitch {...rest} />} label={label} />
);

export default Switch;
