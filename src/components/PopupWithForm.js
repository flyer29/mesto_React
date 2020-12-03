import React from 'react';
import closeImage from '../images/close.svg';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className='popup__content'>
        <img src={closeImage} alt="" className="popup__close"/>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={props.name}>
          {props.children}
            {/* <input type="text" name="username" className="popup__input popup__input_type_name" placeholder="Имя" minLength="2" maxLength="30" required={true}/>
            <span id="username-error" className="popup__error"></span>
            <input type="text" name="about" className="popup__input popup__input_type_about" placeholder="О себе" minLength="2" maxLength="30" required={true}/>
            <span id="about-error" className="popup__error"></span>
            <button id="profile-button" className="button popup__button popup__button_type_profile">Сохранить</button> */}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
