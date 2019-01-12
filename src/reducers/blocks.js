import types from 'Root/actions';

export default (state = {
  data: [],
  news: [],
  lastPolling: 0,
}, action) => {
  switch (action.type) {
    case types.blocks.LOAD: {
      return {
        ...state,
        data: action.data,
      };
    }

    default: {
      return state;
    }
  }
};
