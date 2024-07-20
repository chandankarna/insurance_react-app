import React, { useEffect } from 'react';
import './Style.scss'; // Import your CSS/SASS for styling

function Chatbot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Delay the initialization code until the dfMessenger object is available
      setTimeout(() => {
        if (window.dfMessenger) {
          window.dfMessenger.init({
            chatTitle: 'Chatbot',
            agentId: '80e51251-aa8c-4be1-b932-3a4d98046397',
            languageCode: 'en',
          });
        }
      }, 1000); // Adjust the delay time if needed
    };

    return () => {
      // Remove the script and messenger when the component unmounts
      document.body.removeChild(script);
      const dfMessengerContainer = document.querySelector('.df-messenger-container');
      dfMessengerContainer.parentNode.removeChild(dfMessengerContainer);
    };
  }, []);

  return (
    <div className="chatbot-container">
      {/* You can style this container further */}
      <div className="df-messenger-container"></div>
    </div>
  );
}

export default Chatbot;
