// @mui
import { Stack } from '@mui/material';
// components
import { RHFTextField } from '../../../components/hook-form';
import {
    DescriptionText,
    DESCRIPTION_SPACING, FORM_MAX_WIDTH,
} from '../styles';
import { withPasswordField } from '../../../components/custom-input';
import LabelRequired from '../../../components/LabelRequired';

// ----------------------------------------------------------------------
const PasswordTextField = withPasswordField(RHFTextField)

export default function InputPassword({ description, ...textFieldProps }) {

    return (
        <Stack spacing={DESCRIPTION_SPACING} sx={{ maxWidth: FORM_MAX_WIDTH }}>
            {description && (<LabelRequired>
                <DescriptionText>{description}</DescriptionText>
            </LabelRequired>)}
            <PasswordTextField size="small" {...textFieldProps} />
        </Stack>
    )
}