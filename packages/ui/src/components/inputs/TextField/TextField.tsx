import MuiBox from '@mui/material/Box';
import MuiFormHelperText from '@mui/material/FormHelperText';
import MuiInputBase, { InputBaseProps as MuiInputBaseProps } from '@mui/material/InputBase';
import MuiInputLabel from '@mui/material/InputLabel';

export interface TextFieldProps extends MuiInputBaseProps {
    errorText?: string;
    label?: string;
}

export const TextField = ({
    id,
    label = '',
    type,
    name,
    placeholder,
    endAdornment = null,
    startAdornment = null,
    value,
    onChange,
    onBlur,
    error,
    errorText = 'Incorrect value',
    onPaste,
    inputProps,
    multiline,
    size,
    disabled,
}: TextFieldProps) => {
    return (
        <MuiBox sx={{ display: 'flex', flexDirection: 'column' }}>
            {label && <MuiInputLabel htmlFor={id}>{label}</MuiInputLabel>}
            <MuiInputBase
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onPaste={onPaste}
                type={type}
                name={name}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                inputProps={{ ...inputProps }}
                multiline={multiline}
                size={size}
                error={error}
                disabled={disabled}
            />
            {error && <MuiFormHelperText error>{errorText}</MuiFormHelperText>}
        </MuiBox>
    );
};

export default TextField;
