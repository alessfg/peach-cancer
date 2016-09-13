import test from 'ava';
import { createStore } from 'redux';
import rootReducer from '../../src/reducers';
import * as fetchStatusActions from '../../src/actions/fetchStatusActions';
import * as types from '../../src/constants/actionTypes';

test('update fetch state', t => {
  const store = createStore(rootReducer);
  const action = fetchStatusActions.beginFetchRequest();
  store.dispatch(action);
  const value = store.getState().fetchInProgress;
  const expected = 1;
  t.is(value, expected);
});
