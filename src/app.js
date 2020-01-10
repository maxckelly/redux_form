import React from 'react';
import SyncValidationForm from './SyncValidationForm.js';
import { store } from './store.js';

class App extends React.Component {

  submit = (values) => {
    // The below is how you get the values back from the email
    console.log(store.getState().form.SyncValidation.values.email);
    console.log(values);
  };

  // The below is example data of showing state in a form
  data = {
    username: "John",
    email: "j@j.com",
    age: 22
  }

  render() {
    return (
      <div>
        {/* InitialValues is an example of how you can pre load data into the form */}
        <SyncValidationForm onSubmit={this.submit} initialValues={this.data} />
        <h1> </h1>
      </div>
    )
  }
};

export default App;