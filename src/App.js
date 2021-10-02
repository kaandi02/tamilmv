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
          <Route path="/home" exact>
            <h1 style={{color:"white"}}>Home Page</h1>
          </Route>
          <Route path="/upload" exact>
            <div style={{color:"white",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Open Sans,sans-serif"}}>
              <form encType="multipart/form-data" action="https://vv278o.dood.video/upload/01?54537foxgdvl9j21pplnf" method="post">
                <input name="file" type="file" />
                <input type="submit" />
              </form>
            </div>
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
