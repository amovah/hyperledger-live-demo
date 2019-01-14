import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/helpers/fetch';
import config from 'Root/config';
import sample from './sample';

export default async () => {
  const res = await fetch(`${config.server}from=${escape(Date(0).toString())}&&to=${escape(Date().toString())}`);
  console.log(res);
  store.dispatch({
    type: types.blocks.LOAD,
    data: sample.rows.sort((a, b) => a.blocknum - b.blocknum),
  });
};
