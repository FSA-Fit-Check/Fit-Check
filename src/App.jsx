import './App.css'
import './output.css'
import Home from './components/home.jsx';
import Registration from './components/registration.jsx';
import Login from './components/login.jsx';
import Navbar from './components/navbar.jsx';
import {Routes, Route} from 'react-router-dom';

function App() {
  console.log(`test`)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Home/>
        } />
        <Route path='/login' element={
          <Login/>
        } />
        <Route path='/registration' element={
          <Registration/>
        } />
      </Routes>
    </>
  )
}

export default App;
