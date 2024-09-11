import {
    Radio as MuiRadio,
    FormControlLabel as MuiFormControlLabel,
    Typography,
    type RadioProps as MuiRadioProps,
} from '@mui/material';

export interface RadioProps extends MuiRadioProps {
    label?: string;
}

function DefaultIcon() {
    return (
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" fill="white" />
            <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" stroke="#D6D3D1" />
        </svg>
    );
}

function CheckedIcon() {
    return (
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" fill="#5620E1" />
            <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" stroke="#5620E1" />
            <path
                d="M5.5 9L8 11.5L13 6.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

export const Radio = ({ label, size, ...rest }: RadioProps) => (
    <MuiFormControlLabel
        control={<MuiRadio icon={<DefaultIcon />} checkedIcon={<CheckedIcon />} size={size} {...rest} />}
        label={<Typography>{label}</Typography>}
    />
);

export default Radio;
