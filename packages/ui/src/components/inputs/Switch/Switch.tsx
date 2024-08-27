import { Switch as MuiSwitch, type SwitchProps as MuiSwitchProps } from '@mui/material';

export interface SwitchProps extends MuiSwitchProps {}

export const Switch = ({ ...rest }: SwitchProps) => <MuiSwitch {...rest} />;

export default Switch;
