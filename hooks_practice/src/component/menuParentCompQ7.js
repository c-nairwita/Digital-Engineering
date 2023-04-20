import React from 'react';
import { MenuContext } from './menuContext';
import MenuChildComponent from './menuChildCompQ7';

const MenuParentComponent = () => {
  const menuItems = ['Fullstack', 'Salesforce', 'Mulesoft', 'Guidewire', 'SDET', 'Data Analytics', 'Digital Automation'];

  return (
    <MenuContext.Provider value={menuItems}>
      <MenuChildComponent />
    </MenuContext.Provider>
  );
};

export default MenuParentComponent;
