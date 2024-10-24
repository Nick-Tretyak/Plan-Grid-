// reducers.js

const initialState = {
  boardName: '',
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_BOARD_NAME':
      return {
        ...state,
        boardName: action.payload,
      };
    default:
      return state;
  }
};

export default boardReducer;
