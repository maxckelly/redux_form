import React from 'react';

// field gives us functionality 
import { Field, reduxForm } from 'redux-form'

function validate(values) {
  let errors = {};

  if (!values.username){
    errors.username = 'Required';
  } else if (values.username.length > 8) {
    errors.username = 'Must be 8 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
    // Below is regex which says it must contain an @ symbol and a dot 
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email'
  }

  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN (Number(values.age))){
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18 ) {
    errors.age = 'Sorry you must be 18 or older'
  }

  return errors;
};

function warn(values) {

  const warnings = {};

  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }

  return warnings;
};

class SyncValidationForm extends React.Component {

  renderField({ input, label, type, meta: {touched, error, warning} }) {

    return (
      <div>
        <label> {label} </label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {/* The below makes it so the errors or warnings to come up straight away */}
          { touched && 
            ((error && <span> {error} </span> )|| (warning && <span> {warning} </span>))
          }
        </div>
      </div>
    )
  };

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="username" component={this.renderField} type="text" label="username" />
          <Field name="email" component={this.renderField}  type="email" label="email" />
          <Field name="age" component={this.renderField}  type="number" label="age" />
          <div>
            {/* // The below `this.props.submitting` is built into the redux forms */}
            <button type="submit" disabled={this.props.submitting}> Submit </button>
            {/* The below `this.props.pristine` means that if the form hasn't been submitted e.g. if it hasn't been touched the button clear will be disabled. */}
            {/* The `this.props.reset` resets it to its setState once its been clicked. */}
            <button disabled={this.props.submitting || this.props.pristine} onClick={this.props.reset}> Clear </button>

            
          </div>
        </form>
      </div>
    )
  }
}

// The below exports the form.
export default reduxForm({ form: 'SyncValidation', validate, warn })(SyncValidationForm);