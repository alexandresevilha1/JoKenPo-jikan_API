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
                    <button>LOGIN</button>
                    <button>REGISTRO</button>
                </div>
                <div className='btn-modo'>
                    <p>modo dark</p>
                </div>
            </div>
        </>
    )
}