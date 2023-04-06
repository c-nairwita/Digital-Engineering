import React, { useContext } from 'react';
import {MenuContext} from './menuContext'

const MenuChildComponent = () => {
  const menuItems = useContext(MenuContext);

  return (
    <div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuChildComponent;
