import React from 'react';
import closeImage from '../images/close.svg';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className='popup__content'>
        <img src={closeImage} alt="" className="popup__close" onClick={props.onClose}/>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={props.name}>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
