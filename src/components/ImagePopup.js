import React from 'react';
import closeImage from '../images/close.svg';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__content popup__content_type_image">
        <img src={closeImage} alt="" className="popup__close"/>
      </div>
    </div>
  )
}

export default ImagePopup;