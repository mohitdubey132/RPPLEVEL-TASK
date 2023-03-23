import Reume from './components/Reume'
import { Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (<>
    <div id='AppHome'>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to ="/register">Register </Link></li>
          <li><Link to="/books">Resume</Link></li>
          
        
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/books" element={<Reume />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
