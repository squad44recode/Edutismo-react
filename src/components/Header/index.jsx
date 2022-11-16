import logo from './../../assets/img/logo.svg';
import { Link } from "react-router-dom";
import './styles.css'

export default function Header() {
  return (
    <header className='headerHome'>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img src={logo} className="img-logo" alt="..." />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/memorizacao' >MEMORIZAÇÃO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contra' >JOGO DO CONTRA</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contato' >CONTATO</Link>
              </li>
            </ul>
            <form className="d-flex">
              <button id="btn-entrar" className="btn btn-warning btn-lg"><Link to="/login" >Entrar</Link></button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}