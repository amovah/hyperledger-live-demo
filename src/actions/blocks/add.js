import types from 'Root/actions';
import store from 'Root/store';

export default async () => {
  store.dispatch({
    type: types.blocks.ADD,
    // data: action.data.map(i => ({ ...i, new: true })),
  });
};
