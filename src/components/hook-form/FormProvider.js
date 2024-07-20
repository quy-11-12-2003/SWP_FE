import PropTypes from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

FormProvider.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods, id, ...props }) {
  const { control } = methods ?? {};

  const handleCheckRequired = (name) => {
    return control?.schema?.fields?.[name]?.exclusiveTests?.required ?? false
  }

  return (
    <Form {...methods} onCheckRequired={handleCheckRequired}>
      <form id={id}
        noValidate
        onSubmit={onSubmit}
        {...props}>
        {children}
      </form>
    </Form>
  );
}
