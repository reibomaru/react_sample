import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopPage from './pages/TopPage'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'
import { CountPage } from './pages/CountPage';

function App(props) {
  return(
    <div>
      <h1>React Sample</h1>
      <Router>
        <Link to="/todo">todo</Link><br/>
        <Link to="/about">about</Link><br/>
        <Link to="/count">count</Link>
        <hr/>
        <Route exact path="/" component={TopPage}></Route>
        <Route path="/todo" component={TodoPage} ></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/count" component={CountPage}></Route>
      </Router>
    </div>
  )
}

export default App;
