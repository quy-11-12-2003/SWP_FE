import PropTypes from 'prop-types'
// form
import { Controller, useFormContext } from 'react-hook-form'
// @mui
import { Autocomplete, TextField } from '@mui/material'
// ---------------------------------------------------------

RHFAutocomplete.propTypes = {
    name: PropTypes.string,
}

export default function RHFAutocomplete({ name, label, renderInput, inputProps, onChangeCustom, ...props }) {
    const { control, onCheckRequired } = useFormContext()

    const isRequired = onCheckRequired?.(name)

    return <Controller
        control={control}
        name={name}
        render={({ field: { onChange, ...fieldProps }, fieldState: { error } }) => (
            <Autocomplete
                {...fieldProps}
                getOptionLabel={(option) => {
                    return option?.value ?? "";
                }}
                onChange={(event, newValue, reason) => {
                    if (onChangeCustom) onChangeCustom(newValue, reason, name)
                    else onChange(newValue)
                }}
                isOptionEqualToValue={(option, value) => option.key === value.key}
                renderInput={(params) => renderInput?.(params, error) ?? <TextField
                    {...params}
                    label={label}
                    error={!!error}
                    required={isRequired}
                    helperText={error?.message}
                    InputProps={{ ...params.InputProps, ...inputProps }}
                />
                }
                {...props}
            />
        )}
    />
}