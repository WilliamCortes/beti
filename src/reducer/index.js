import { SHOW_CREATE_REMINDER }from "../actions";

const initialState = {
  showCreateReminder: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CREATE_REMINDER:
         return { ...state, showCreateReminder: action.payload };

    default: return state;
  }
};

export default rootReducer;