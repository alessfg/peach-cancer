import test from 'ava';
import * as fetchStatusActions from '../../src/actions/fetchStatusActions';
import * as types from '../../src/constants/actionTypes';

test('dispatch fetch action', t => {
  const expectedAction = {
    type: types.FETCH_REQUEST,
  };
  const action = fetchStatusActions.beginFetchRequest();
  t.deepEqual(action, expectedAction);
});
