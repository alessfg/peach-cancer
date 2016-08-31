// Combine reducers
import { combineReducers } from 'redux';
// Ensures new navigations events are synched with the store
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-form';
import patientReducer from './patientReducer';
import fetchStatusReducer from './fetchStatusReducer';

// Combine reducers
const rootReducer = combineReducers({
  fetchInProgress: fetchStatusReducer,
  patients: patientReducer,
  form: reducer,
  routing: routerReducer,
});

// Export root reducer
export default rootReducer;
