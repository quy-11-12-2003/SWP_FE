import { PropTypes } from 'prop-types'
import { useFormContext } from 'react-hook-form';
import { Stack, Typography, Box } from "@mui/material";

// ----------------------------------------------------------------------

/**
 * @param {*} input Input Component
 * @param {*} label Label test
 * @param {*} description Description text
 * @param {*} descPosition 'top', 'bottom'
 * @returns 
 */
export default function FormInputLabel({ input,
    label, labelProps,
    description, descPosition = 'bottom',
    isRequired = false, requireSymbol = '*',
    ...other }) {
    const Description = description && <Typography variant="caption"
        color='text.disabled'>{description}</Typography>

    return (
        <Stack spacing={0.5} {...other}>
            <Typography
                variant="subtitle2"
                fontWeight={500}
                sx={{ width: 'max-content' }}
                {...labelProps}>
                <Box component='span'>{label}</Box>
                {isRequired && <Box component='span'
                    sx={{
                        ml: 0.3,
                        color: 'red',
                    }}>
                    {requireSymbol}
                </Box>}
            </Typography>
            {descPosition === 'top' && Description}
            {input}
            {descPosition === 'bottom' && Description}
        </Stack>
    )
}
FormInputLabel.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    descPosition: PropTypes.oneOf(['bottom', 'top']),
}

export function withDescHelperText(Component, descStyles = {}) {
    return ({ descHelpText, ...props }) => {
        const { formState } = useFormContext() ?? {}
        const hasError = !!formState?.errors[props?.name]
        const extraProps = {
            sx: descStyles && {
                '& .MuiFormHelperText-root': {
                    ...descStyles,
                },
            },
            helperText: descHelpText && descHelpText,
        }
        return <Component {...props} {...!hasError && extraProps} />
    }
}
