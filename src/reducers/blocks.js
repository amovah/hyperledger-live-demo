import types from 'Root/actions';

export default (state = { data: [], lastTime: 0 }, action) => {
  switch (action.type) {
    case types.blocks.LOAD: {
      return action.data;
    }

    case types.blocks.ADD: {
      return [...state, ...action.data];
    }

    default: {
      return state;
    }
  }
};
