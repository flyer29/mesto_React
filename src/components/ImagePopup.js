import React from 'react';
import closeImage from '../images/close.svg';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen && 'popup_is-opened'}`}>
      <div className="popup__content popup__content_type_image" style={{ backgroundImage: `url(${props.card.link})` }}>
        <img src={closeImage} alt="" className="popup__close" onClick={props.onClose}/>
      </div>
    </div>
  );
}

export default ImagePopup;
