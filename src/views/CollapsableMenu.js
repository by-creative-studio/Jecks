import React, { useState } from 'react';
import './CollapsableMenu.scss';

import openImage from '../Image/dropdown.png';  

const CollapsableMenu = ({ images, onSelectImage, isExpand, setCollapsableIndexExpand, index}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setCollapsableIndexExpand(isExpand ? null : index);
 
  return (
    <div className="collapsable-menu" >
      <img
        src={openImage}
        alt={isExpand ? 'Hide Options' : 'Show Options'}
        className="toggle-image"
        onClick={toggleMenu}
      />
      {isExpand && (
        <div className="menu-options">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Option ${index + 1}`}
              className="menu-image"
              onClick={() => onSelectImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapsableMenu;
