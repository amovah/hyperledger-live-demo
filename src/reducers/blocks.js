import types from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.blocks.LOAD: {
      return action.data;
    }

    case types.blocks.TOGGLE_SHOWING: {
      const index = state.findIndex(i => i.blockhash === action.blockhash);

      return [
        ...state.slice(0, index),
        {
          ...state[index],
          showing: !state[index].showing,
        },
        ...state.slice(index + 1),
      ];
    }

    default: {
      return state;
    }
  }
};
