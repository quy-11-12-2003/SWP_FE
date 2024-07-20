import { forwardRef, useState } from "react";
import { TextField } from "@mui/material";

// ----------------------------------------------------------------------

const ManualShrinkTextField = forwardRef(({ onChange, ...props }, ref) => {
    const [shrink, setShrink] = useState(false)

    const makeAnimationStartHandler = (e) => {
        const autofilled = !!e.target?.matches("*:-webkit-autofill");

        const shrinkageIsChanged = e.animationName === "mui-auto-fill" ||
            (e.animationName === "mui-auto-fill-cancel" && props?.value === "")

        if (shrinkageIsChanged) setShrink(autofilled)
    };

    return <TextField {...props}
        ref={ref}
        onChange={(e) => {
            const newValue = e.target.value
            onChange(newValue)
            setShrink(newValue !== "")
        }}
        InputLabelProps={{ shrink }}
        inputProps={{
            ...props?.inputProps,
            onAnimationStart: makeAnimationStartHandler,
        }}
    />
})

export default ManualShrinkTextField;