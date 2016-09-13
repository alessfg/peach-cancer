import test from 'ava';
import fetchStatusReducer from '../../src/reducers/fetchStatusReducer';
import * as fetchStatusActions from '../../src/actions/fetchStatusActions';

test('return new fetch value', t => {
  const initialState = 0;
  const action = fetchStatusActions.beginFetchRequest();
  const newState = fetchStatusReducer(initialState, action);
  t.is(newState, 1);
});
