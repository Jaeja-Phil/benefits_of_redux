const initialState = [{ id: 0, text: "빨래하기", completed: false }];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: define what your action.type would do here
    default:
      return state;
  }
}

export default todoReducer;
