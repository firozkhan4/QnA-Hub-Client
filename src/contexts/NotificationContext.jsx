import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  const handleNotification = (message) => {
    setNotificationMsg(message);
    setShowNotification(() => true);

    setTimeout(() => {
      setShowNotification(() => false);
      setNotificationMsg('');
    }, 2000);
  };
  return (
    <NotificationContext.Provider
      value={{ showNotification, handleNotification, notificationMsg }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
