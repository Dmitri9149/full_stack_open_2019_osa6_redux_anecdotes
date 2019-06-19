import React from 'react';
import { connect } from 'react-redux'


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

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log(state)
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps
)(Notification)
