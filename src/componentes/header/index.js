import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <>
            <div className='header-topo'>
                <h1 className='header-logo'>JoKenPo</h1>
                <div className='search-bar'>
                    <input type='search' placeholder='Procure seus animes'/>
                </div>
                <div className='btn-login-registro'>
                    <button><Link to='/login'>LOGIN</Link></button>
                    <button>REGISTRO</button>
                </div>
                <div className='btn-modo'>
                    <p>modo dark</p>
                </div>
            </div>
        </>
    )
}