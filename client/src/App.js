import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Registration from './pages/Registration'

const App = () => {
  

    return (
        <Router>
            <Switch>
            <Route path='/registration' exact render={(props)=><Registration />} />
            <Route path='/' render={(props)=><Main />} />
            </Switch>
        </Router>
    )
}

export default App
