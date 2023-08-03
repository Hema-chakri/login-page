// Write your code here
import {Component} from 'react'

class Message extends Component {
  state = {message: 'Login'}

  render() {
    const {message} = this.state
    let loginMsg
    if (message === 'Login') {
      loginMsg = <p>Welcome User</p>
    }
    loginMsg = <p>Please Login</p>
    return {
      loginMsg,
    }
  }
}

export default Message
