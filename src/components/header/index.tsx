import './styles.css'
import logo from '../../resources/logo.png'


function Header() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> CRTNDRDRS
          </h2>
          <span>Empaque para todos</span>
        </header>
    );
  }
  
  export default Header;