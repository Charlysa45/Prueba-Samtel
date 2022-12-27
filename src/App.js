import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
            <Routes>
              <Route index element={<Login/>}/>
              <Route path='/Home' element={<Home/>}/>
            </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
