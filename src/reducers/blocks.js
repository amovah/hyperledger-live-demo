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

    case types.blocks.NEW: {
      return {
        ...state,
        news: [...state.news, ...action.news],
      };
    }

    default: {
      return state;
    }
  }
};
