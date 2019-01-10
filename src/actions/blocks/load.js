import types from 'Root/actions';
import store from '../../store';
import sample from './sample';

export default async () => {
  store.dispatch({
    type: types.blocks.LOAD,
    data: sample.rows.sort((a, b) => a.blocknum - b.blocknum),
  });
};
