import store from 'Root/store';
import types from 'Root/actions';

export default (blockhash) => {
  store.dispatch({
    type: types.blocks.TOGGLE_SHOWING,
    blockhash,
  });
};
