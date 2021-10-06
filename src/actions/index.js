export const SHOW_CREATE_REMINDER ='show_create_reminder';
export const ADD_REMINDER ='addReminder';

let todoId = 1

export const showCreateReminder = payload =>{
    return {
        type: SHOW_CREATE_REMINDER,
        payload: payload
      }
};

export const addReminder = payload =>{
  payload.status = ''
  payload.id = todoId++
  return {
      type: ADD_REMINDER,
      payload: payload
  }
};