import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MicIcon from '../assets/mic.png';
import SettingsIcon from '../assets/settings.png';
import './header.css';

function Header() {
  const location = useLocation();
  const selectedCountry = useSelector((state) => state.countries.selectedCountry);
  const isDetailsPage = location.pathname.startsWith('/country/');
  const headerContent = isDetailsPage ? selectedCountry?.name.common : 'Population Data';

  return (
    <header className="header">
      <div className="header-left">
        {isDetailsPage && (
          <Link to="/" className="back-link">
            &lt;
          </Link>
        )}
        <h1>{headerContent}</h1>
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
