import './App.css'
import './output.css'
import Home from './components/home.jsx';
import Registration from './components/registration.jsx';
import Login from './components/login.jsx';
import Navbar from './components/navbar.jsx';

function App() {
  console.log(`test`)

  return (
    <>
    <Navbar/>
    <Home/>
    <Login/>
    <Registration/>
    </>

  )
}

export default App;
