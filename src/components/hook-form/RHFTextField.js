/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types";
// form
import { useFormContext, Controller, useController } from "react-hook-form";
// @mui
import { TextField as MUITextField } from "@mui/material";
import { ManualShrinkTextField } from "../custom-input";

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextField({
  name,
  customValue,
  isManualShrink = false,
  ...other
}) {
  const { control, onCheckRequired } = useFormContext();

  const isRequired = onCheckRequired?.(name);

  const TextField = isManualShrink ? ManualShrinkTextField : MUITextField;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          required={isRequired}
          value={
            customValue
              ? customValue(field.value)
              : typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}

export function PhoneNumberInput({ name, ...props }) {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  return (
    <RHFTextField
      name={name}
      {...props}
      autoComplete="off"
      onChange={(event) => {
        const val = event.target.value;
        if (val.match(/[^0-9 +-.()]/)) return event.preventDefault();
        field.onChange(val);
      }}
    />
  );
}
