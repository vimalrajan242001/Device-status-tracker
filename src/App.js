import {Route,BrowserRouter as Router} from 'react-router-dom';
import Device from './Components/Device'
import Navbar from './Components/Navbar';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
          <Navbar />
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/device" component={Device} />
    </Router>
    </div>
  );
}

export default App;
