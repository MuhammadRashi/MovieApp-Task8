import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { MovieDetails } from './pages/MovieDetails'
import { ProtectedAuth } from './context/ProtectedAuth'

function App() {

  return (
    <>
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route element={<ProtectedAuth/>}>
      <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>
      </Route>
      {/* <Route element={<ProtectedAuth/>}> */}
      {/* </Route> */}
    </Routes>
    </>
  )
}

export default App

