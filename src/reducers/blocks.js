import types from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.blocks.LOAD: {
      return action.data;
    }

    default: {
      return state;
    }
  }
};
