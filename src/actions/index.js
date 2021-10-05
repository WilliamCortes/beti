export const SHOW_CREATE_REMINDER ='show_create_reminder';

export const showCreateReminder = payload =>{
    return {
        type: SHOW_CREATE_REMINDER,
        payload: payload
      }
};
