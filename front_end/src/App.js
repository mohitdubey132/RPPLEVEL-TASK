import Reume from './components/Reume'
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Admin from './components/Admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
function App() {
 
  return (<>
    <div id='AppHome'>
     
      <Routes>
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/register' element={<RegistrationForm/>} />
        <Route path="/" element={<Reume />} />
        
      </Routes>
    </div>
  </>
  );
}

export default App;
