import {
    Box as MuiBox,
    InputLabel as MuiInputLabel,
    Autocomplete as MuiAutocomplete,
    TextField as MuiTextField,
    FormHelperText as MuiFormHelperText,
    AutocompleteChangeDetails,
} from '@mui/material';
import { SyntheticEvent } from 'react';
import { IconSelector } from '@tabler/icons-react';

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
                    <MuiTextField {...params} size="medium" error={error} placeholder={placeholder} />
                )}
                ChipProps={{
                    size: 'small',
                }}
                popupIcon={<IconSelector />}
                disabled={disabled}
            />
            {helpText && <MuiFormHelperText>{helpText}</MuiFormHelperText>}
            {error && <MuiFormHelperText error>{errorText}</MuiFormHelperText>}
        </MuiBox>
    );
};

export default Autocomplete;
