import types from 'Root/actions';
import store from 'Root/store';

export default async () => {
  store.dispatch({
    // type: types.blocks.ADD,
    type: 'blocks/ADD',
    data: [
      {
        channelname: 'mychannel',
        blocknum: 0,
        txcount: 1,
        datahash: 'e3a601c3ab9d9b17967b97e720cb5ba9469e552398e9db989ef9667da31b5019',
        blockhash: '1b6b205c6bfa198788392de814a2a1a1df67339a05d0a31b845eb8937a7',
        prehash: '',
        createdt: '2019-01-06T10:35:52.000Z',
        txhash: [
          '',
        ],
        new: true,
      },
    ],
  });
};
