import { Link } from 'react-router-dom';
import MicIcon from '../assets/mic.png';
import SettingsIcon from '../assets/settings.png';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Population Data</h1>
      </div>
      <div className="header-right">
        <Link to="/mike">
          <img src={MicIcon} alt="Mic Icon" className="icon" />
        </Link>
        <Link to="/settings">
          <img src={SettingsIcon} alt="Settings Icon" className="icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
