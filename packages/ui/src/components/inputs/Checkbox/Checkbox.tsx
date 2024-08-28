import {
    Checkbox as MuiCheckbox,
    FormControlLabel as MuiFormControlLabel,
    Typography,
    type CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

export interface CheckboxProps extends MuiCheckboxProps {
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

function IndeterminateIcon() {
    return (
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" fill="#5620E1" />
            <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" stroke="#5620E1" />
            <path d="M5.5 9H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

export const Checkbox = ({ label, size, ...rest }: CheckboxProps) => (
    <MuiFormControlLabel
        control={
            <MuiCheckbox
                icon={<DefaultIcon />}
                checkedIcon={<CheckedIcon />}
                indeterminateIcon={<IndeterminateIcon />}
                size={size}
                {...rest}
            />
        }
        label={<Typography>{label}</Typography>}
    />
);

export default Checkbox;
