import { PropTypes } from "prop-types";
import { Alert, Grid, Card } from "@mui/material";
//
import { FormProvider } from "../../../components/hook-form";
import GeneralForm from "./GeneralForm";
//
import { CardTitle, RHFLoadingButtonStyled } from "../styles";

// ----------------------------------------------------------------------

export default function UpdateAccountForm({ methods, onSubmit }) {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!!errors.afterSubmit && (
        <Alert severity="error">{errors.afterSubmit.message}</Alert>
      )}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <CardTitle>Tài khoản</CardTitle>
            <GeneralForm />
            <RHFLoadingButtonStyled
              sx={{ float: "left" }}
              loading={isSubmitting}
              content={"Lưu thay đổi"}
            />
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

UpdateAccountForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  methods: PropTypes.object.isRequired,
};
