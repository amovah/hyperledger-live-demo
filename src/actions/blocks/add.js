import types from 'Root/actions';
import store from 'Root/store';

export default async (data) => {
  store.dispatch({
    type: types.blocks.ADD,
    data: data.map(i => ({ ...i, new: true })).sort((a, b) => a.blocknum - b.blocknum),
  });
};
