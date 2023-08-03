// Write your code here
import {Component} from 'react'

class Login extends Component {
  state = {login: 'Login'}

  render() {
    const {login} = this.state
    return {login}
  }
}

export default Login
