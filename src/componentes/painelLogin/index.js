import { Link } from 'react-router-dom'
import './painelLogin.css'

export default function PainelLogin() {
    return (
        <>
            <div className='area-login'>
            <button className='btn-voltar'><Link to='/'>VOLTAR</Link></button>
                <div className='painel-login'>

                </div>
            </div>
        </>
    )
}