import {
    Box as MuiBox,
    InputLabel as MuiInputLabel,
    Select as MuiSelect,
    MenuItem as MuiMenuItem,
    TextField as MuiTextField,
    FormHelperText as MuiFormHelperText,
    type SelectProps as MuiSelectProps,
    SelectChangeEvent,
} from '@mui/material';
import { IconSelector } from '@tabler/icons-react';

type Option = { value: string; label: string };

export type SelectProps = MuiSelectProps & {
    options: Option[];
    label?: string;
    defaultValue?: string;
    onChange?: (val: string) => void;
    id?: string;
    required?: boolean;
    error?: boolean;
    errorText?: string;
    helpText?: string;
    disabled?: boolean;
};

export const Select = ({
    options,
    label,
    defaultValue,
    onChange,
    id,
    required,
    error,
    errorText = 'Incorrect value',
    multiple = false,
    helpText,
    disabled,
    ...rest
}: SelectProps) => {
    const defaultVal = multiple
        ? options.filter((option) => defaultValue?.includes(option.value))
        : options.find((option) => option.value === defaultValue);

    const onChangeHandler = (event: SelectChangeEvent<unknown>, child: React.ReactNode): void => {
        if (onChange) {
            const { value } = event.target;

            // Array.isArray(value) ? onChange(value) : onChange([value]);
            onChange(value as string);
        }
    };

    return (
        <MuiBox sx={{ display: 'flex', flexDirection: 'column' }}>
            {label && <MuiInputLabel htmlFor={id}>{label}</MuiInputLabel>}
            <MuiSelect
                {...rest}
                id={id}
                defaultValue={defaultVal}
                onChange={onChangeHandler}
                required={required}
                disabled={disabled}
                multiline={multiple}
                inputProps={{ error }}
                IconComponent={IconSelector}
            >
                {options.map(({ value, label }) => (
                    <MuiMenuItem key={value} value={value}>
                        {label}
                    </MuiMenuItem>
                ))}
            </MuiSelect>
            {helpText && <MuiFormHelperText>{helpText}</MuiFormHelperText>}
            {error && <MuiFormHelperText error>{errorText}</MuiFormHelperText>}
        </MuiBox>
    );
};
