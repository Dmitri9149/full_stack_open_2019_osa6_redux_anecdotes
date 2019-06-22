

const initialState = 'Initial notification'

const notificationReducer = (state = initialState, action) => {
  console.log('state now notification: ', state)
  console.log('action notification', action)

  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

const setNotificationOnce = async (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}
async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export const setNotification = (notification, time ) => {
  return async dispatch => {
    const firstNotification = await setNotificationOnce(notification)
    dispatch(firstNotification)
    await wait (1000*time)
    const secondNotification =  await setNotificationOnce('')
    dispatch(secondNotification)
  }
}





export default notificationReducer