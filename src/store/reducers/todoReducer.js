const initialState = [{ id: 1, text: "빨래하기", completed: false }];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: define what your action.type would do here
    case "ADD_TODO":
      const id = state.length + 1;
      const copiedState = state.map((todo) => {
        return { ...todo };
      });
      return copiedState.concat({ id, text: action.payload, completed: false });
    default:
      return state;
  }
}

export default todoReducer;
