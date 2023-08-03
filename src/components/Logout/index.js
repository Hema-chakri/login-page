// Write your code here
import {Component} from 'react'

class Logout extends Component {
  state = {logout: 'Logout'}

  render() {
    const {logout} = this.state
    return {logout}
  }
}

export default Logout
