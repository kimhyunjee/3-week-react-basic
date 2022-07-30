import './App.css';
import {Link, Route} from "react-router-dom";
import Home from "./Home";
import Cat from './Cat';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">cat으로 가기</Link>
        <Link to="/dog">dog으로 가기</Link>

      </div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cat"   component={Cat}>
      {/* <Route path="/cat/:cat_name"  component={Cat} exact component={Cat}> */}
        {/* <Cat/> */}
      </Route>
      <Route path="/dog" >
        <Dog/>
      </Route>


    </div>
  );
}

export default App;
