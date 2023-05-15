import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../paginas/home'
import Login from '../paginas/login'

export default function Rotas() {
    return(
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/login' element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    )
  }