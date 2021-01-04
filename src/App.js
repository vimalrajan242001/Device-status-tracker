import {Route,BrowserRouter as Router} from 'react-router-dom';
import {Paper,ThemeProvider,createMuiTheme} from '@material-ui/core';
import Device from './Components/Device'
import Navbar from './Components/Navbar';
import Home from './Components/Home'
const theme = createMuiTheme({
    palette:{
      type:'dark'
    }
  })
function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>  
        <Paper  >
          <Navbar />
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/device" component={Device} />
    </Router>
    </Paper>
    </ThemeProvider>
    </div>
  );
}

export default App;
