import {Switch, Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import Game from './components/Game'
import Scorecard from './components/ScoreCard'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/game" component={Game} />
    <Route exact path="/scorepage" component={Scorecard} />
  </Switch>
)

export default App
