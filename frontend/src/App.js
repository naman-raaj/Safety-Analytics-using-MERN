 
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login/Login';
import Create from './User/create';
import Update from './User/Update';
import HomePage from '../src/HomePage/HomePage'
 

const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Signup/>}> </Route>
      <Route path='/create' element={ <Create/>}> </Route>
      <Route path='/Homepage/update/:id' element={ <Update/>}> </Route>
      <Route path='/register' element={ <Signup/>}> </Route>
      <Route path='/homepage' element={ <HomePage/>}> </Route> 
      <Route path='/login' element={ <Login/>}> </Route>
      <Route path='/Homepage/usermanagement' element={ <HomePage/>}> </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
