import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/helpers/fetch';

export default async () => {
  const res = await fetch();

  store.dispatch({
    type: types.blocks.LOAD,
    data: res.data.rows.sort((a, b) => a.blocknum - b.blocknum),
  });
};
