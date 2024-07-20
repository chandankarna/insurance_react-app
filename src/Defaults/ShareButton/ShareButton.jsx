import React, { useState } from 'react';
import './Style.scss';

const ShareButton = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleShareClick = () => {
    setShowIcons(!showIcons);
  };

  const socialIcons = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      iconClass: 'fab fa-facebook',
    },
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=Check%20out%20this%20cool%20page%3A%20${window.location.href}`,
      iconClass: 'fab fa-whatsapp',
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${window.location.href}`,
      iconClass: 'fab fa-twitter',
    },
    // Add more social media icons as needed
  ];

  return (
    <div className="share-button">
      <button onClick={handleShareClick} className="share-icon">
        <i className="fas fa-share"></i>
      </button>
      <div className={`share-icons ${showIcons ? 'active' : ''}`}>
        {socialIcons.map((socialIcon, index) => (
          <a key={index} href={socialIcon.url} target="_blank" rel="noopener noreferrer">
            <i className={socialIcon.iconClass}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareButton;
