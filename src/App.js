import 'Landing' from './Landing.js'
import 'Rules' from './TheRules.js'
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/rules' component={Rules} />
      </Router>
  )
  }
}

export default App
