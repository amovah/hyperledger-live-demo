import fetch from 'Root/helpers/fetch';
import store from 'Root/store';
import add from './add';

const polling = async () => {
  try {
    const res = await fetch();

    const lastBlock = store.getState().blocks.slice(-1)[0];
    const lastNum = lastBlock ? lastBlock.blocknum : -1;
    add(res.data.rows.filter(i => i.blocknum > lastNum));

    setTimeout(polling, 10000);
  } catch (e) {
    setTimeout(polling, 10000);
  }
};

export default polling;
