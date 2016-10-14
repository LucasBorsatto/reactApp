import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { DatePicker, TextField } from 'redux-form-material-ui';

injectTapEventPlugin();

class Form extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const minDate = new Date();
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="recipientTransfer" component={TextField} hintText="Ingrese Destinatario" floatingLabelText="Nombre y Apellidos" />
        </div>
        <div>
          <Field name="amountTransfer" component={TextField} hintText="Ingrese Monto" floatingLabelText="Monto Transferencia" type="number" />
        </div>
        <div>
          <Field name="dateTransfer" component={DatePicker} hintText="Ingrese Fecha" floatingLabelText="Fecha" minDate={minDate} />
        </div>
        <div>
          <RaisedButton type="submit" disabled={pristine || submitting} className="button" onClick={handleSubmit} >Enviar</RaisedButton>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = ['recipientTransfer', 'amountTransfer', 'dateTransfer'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo requerido';
    }
  });
  if (isNaN(Number(values.amountTransfer))) {
    errors.amountTransfer = 'Debe ser un valor numérico';
  }
  return errors;
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};

const form = 'formTransfer';
Form = reduxForm({
  form,
  fields: ['recipientTransfer', 'amountTransfer', 'dateTransfer'],
  validate,
})(Form)
export default Form;
