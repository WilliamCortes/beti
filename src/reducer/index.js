import { SHOW_CREATE_REMINDER, ADD_REMINDER }from "../actions";

const initialState = {
  showCreateReminder: false,
  reminders:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CREATE_REMINDER:
         return { ...state, showCreateReminder: action.payload };

    case ADD_REMINDER:
        return { ...state, reminders: [...state.reminders, action.payload] }

    default: return state;
  }
};

export default rootReducer;