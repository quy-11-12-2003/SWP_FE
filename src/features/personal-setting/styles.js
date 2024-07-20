import { Typography, styled } from "@mui/material";
import RHFLoadingButton from "../../components/hook-form/RHFLoadingButton";

export const DESCRIPTION_SPACING = 0.75
export const FORM_MAX_WIDTH = 450

export const DescriptionText = styled(Typography)(({ theme, disabled }) => ({
    color: theme.palette.text[disabled ? 'disabled' : 'secondary'],
    fontSize: '0.825rem',
}));
export const CardTitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
}));
export function RHFLoadingButtonStyled({ sx, ...props }) {
    return <RHFLoadingButton
        variant="contained" size="small"
        loadingIndicator={'Loading...'}
        sx={{ mt: 4, mb: 2, float: 'right', ...sx }}
        {...props} />
}