// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {message: 'Login'}

  onLogin = () => {
    this.setState({message: 'Logout'})
  }

  onLogout = () => {
    this.setState({message: 'Login'})
  }

  render() {
    const {message} = this.state

    return (
      <div>
        {message === 'Logout' ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
        {message === 'Logout' ? (
          <button type="button" onClick={this.onLogout}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={this.onLogin}>
            Login
          </button>
        )}
      </div>
    )
  }
}

export default Home
