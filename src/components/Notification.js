import React from 'react';

const Notification = (props) => {

  console.log('notification store', props)
  console.log('notification store', props)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

export default Notification
