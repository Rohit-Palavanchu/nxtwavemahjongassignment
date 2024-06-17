// Write your code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Container, Title, Input, Button, PlayContainer} from './styledComponent'

class Welcome extends Component {
  state = {name: ''}

  playGame = event => {
    event.preventDefault()
    const {name} = this.state
    const {history} = this.props
    if (name.length > 0) {
      Cookies.set('name', name, {expires: 7, path: '/'})
      history.replace('/game')
    } else {
      // eslint-disable-next-line no-alert
      alert('Enter a name to proceed')
    }
  }

  render() {
    const {name} = this.state
    return (
      <Container>
        <Title>React Tiles</Title>
        <PlayContainer>
          <Title>Enter Your Name</Title>
          <Input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={e => this.setState({name: e.target.value})}
          />
          <Button onClick={this.playGame}>Play</Button>
        </PlayContainer>
      </Container>
    )
  }
}
export default Welcome
