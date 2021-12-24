import React, { useState, useContext } from 'react';

const SideCartContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  
  return (
    <SideCartContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
     
      {children}
    </SideCartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SideCartContext);
};

export { SideCartContext, AppProvider };