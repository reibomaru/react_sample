import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopPage from './pages/TopPage'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'
import { CountPage } from './pages/CountPage';
import PushPage from './pages/PushPage'

function App(props) {
  return(
    <div>
      <h1>React Sample</h1>
      <Router>
        <ul>
          <li><Link to="/todo">todo</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/count">count</Link></li>
          <li><Link to="/push">push</Link></li>
        </ul>
        
        <hr/>
        <Route exact path="/" component={TopPage}></Route>
        <Route path="/todo" component={TodoPage} ></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/count" component={CountPage}></Route>
        <Route path="/push" component={PushPage}></Route>
      </Router>
    </div>
  )
}

export default App;
