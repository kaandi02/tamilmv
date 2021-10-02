import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import requests from './requests';
import Video from './Video';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Video title="Videos" fetchURL={requests.fetchList} />
          </Route>
          <Route path="*">
            <h3 style={{color:"white",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Open Sans,sans-serif"}}>The Requested URL not found on this Server</h3>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
