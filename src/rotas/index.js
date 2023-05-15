import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../paginas/home'

export default function Rotas() {
    return(
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> }/>
        </Routes>
      </BrowserRouter>
    )
  }