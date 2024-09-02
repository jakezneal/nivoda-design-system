import { Chip as MuiChip, type ChipProps as MuiChipProps } from '@mui/material';

export interface ChipProps extends MuiChipProps {}

export const Chip = ({ ...rest }: ChipProps) => <MuiChip {...rest} />;

export default Chip;
