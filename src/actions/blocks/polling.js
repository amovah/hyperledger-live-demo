import fetch from 'Root/helpers/fetch';
import store from 'Root/store';
import add from './add';

const polling = async () => {
  const res = await fetch();

  const lastNum = store.getState().blocks.slice(-1)[0].blocknum;
  add(res.data.rows.filter(i => i.blocknum > lastNum));

  setTimeout(polling, 10000);
};

export default polling;
