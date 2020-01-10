import { createStore, combineReducers } from 'redux';
// Redux form provides us with its own reducer, this is was we have put this 'as' `formReducer`
import { reducer as formReducer } from 'redux-form'; 


// This dedicates the one store. 
const rootReducer = combineReducers ({
  // We place all our reducers here.
  // The one for the form redux has to be called form.
  form: formReducer
});


export const store = createStore(rootReducer);