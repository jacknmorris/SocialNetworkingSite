import React from 'react';
import Logo from '../src/images/logo.png';
import NotificationLogo from '../src/images/notifications.png';

const Header = () => {
  const handleLogoClick = () => {
    // Do something when the logo is clicked
    console.log('Logo clicked!');
    // Add your desired functionality here

    // Reload the home page (if needed)
    window.location.reload();
  };

  const handleNotificationClick = () => {
    // Do something when the notification button is clicked
    console.log('Notification button clicked!');
    // Add your desired functionality here
  };

  return (
    <header className="app-header">
      <div className="header-logo">
        <button className="logo-button" onClick={handleLogoClick}>
          <img src={Logo} alt="Logo" className="logo-image" />
        </button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="header-icons">
        <button className="notification-button" onClick={handleNotificationClick}>
          <img src={NotificationLogo} alt="Notifications" className="notification-image" />
        </button>
        {/* Add more header icons/buttons here */}
      </div>
    </header>
  );
};

export default Header;
