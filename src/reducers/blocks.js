import types from 'Root/actions';

export default (state = { data: [], lastTime: 0 }, action) => {
  switch (action.type) {
    case types.blocks.LOAD: {
      return {
        data: action.data,
        lastTime: action.time,
      };
    }

    case types.blocks.ADD: {
      return {
        data: [...state.data, ...action.data],
        lastTime: action.time,
      };
    }

    default: {
      return state;
    }
  }
};
