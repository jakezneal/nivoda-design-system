import {
    Box as MuiBox,
    InputLabel as MuiInputLabel,
    Autocomplete as MuiAutocomplete,
    TextField as MuiTextField,
    FormHelperText as MuiFormHelperText,
    AutocompleteChangeDetails,
} from '@mui/material';
import { SyntheticEvent } from 'react';

type Option = { label: string; id: string };

export interface AutocompleteProps {
    options: Option[];
    label?: string;
    defaultValue?: string | string[];
    onChange?: (val: Option[]) => void;
    id?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    error?: boolean;
    errorText?: string;
    multiple?: boolean;
    helpText?: string;
    size?: 'small' | 'medium';
    disabled?: boolean;
}

export const Autocomplete = ({
    options,
    id,
    label,
    defaultValue,
    onChange,
    placeholder,
    error,
    errorText = 'Incorrect value',
    multiple = false,
    helpText,
    size,
    disabled,
    ...rest
}: AutocompleteProps) => {
    const defaultVal = multiple
        ? options.filter((option) => defaultValue?.includes(option.id))
        : options.find((option) => option.id === defaultValue);

    const onChangeHandler = (
        _: SyntheticEvent<Element, Event>,
        value: Option | Option[],
        reason: string,
        details?: AutocompleteChangeDetails<Option>,
    ): void => {
        if (onChange) {
            Array.isArray(value) ? onChange(value) : onChange([value]);
        }
    };

    function DropdownIcon() {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.33325 6.00004L7.99992 3.33337L10.6666 6.00004M10.6666 10L7.99992 12.6667L5.33325 10"
                    stroke="#44403C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    }

    return (
        <MuiBox sx={{ display: 'flex', flexDirection: 'column' }}>
            {label && <MuiInputLabel htmlFor={id}>{label}</MuiInputLabel>}
            <MuiAutocomplete
                {...rest}
                options={options}
                id={id}
                multiple={multiple}
                disableClearable
                defaultValue={defaultVal}
                onChange={onChangeHandler}
                isOptionEqualToValue={(originalOptionsArrayValue, valueSelectedByUser) =>
                    originalOptionsArrayValue.id === valueSelectedByUser.id
                }
                renderInput={(params) => (
                    <MuiTextField {...params} size={size} error={error} placeholder={placeholder} />
                )}
                popupIcon={<DropdownIcon />}
                disabled={disabled}
            />
            {helpText && <MuiFormHelperText>{helpText}</MuiFormHelperText>}
            {error && <MuiFormHelperText error>{errorText}</MuiFormHelperText>}
        </MuiBox>
    );
};

export default Autocomplete;
