import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function nameOnChange(event) {
    setName(event.target.value);
  }

  function descriptionOnChange(event) {
    setDescription(event.target.value);
  }

  React.useEffect(() =>  {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <input
        type="text"
        name="username"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        minLength="2"
        maxLength="30"
        required={true}
        onChange={nameOnChange}
        value={name}
      />
      <span id="username-error" className="popup__error"></span>
      <input
        type="text"
        name="about"
        className="popup__input popup__input_type_about"
        placeholder="О себе"
        minLength="2"
        maxLength="30"
        required={true}
        onChange={descriptionOnChange}
        value={description}
      />
      <span id="about-error" className="popup__error"></span>
      <button id="profile-button" className="button popup__button popup__button_type_profile">Сохранить</button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;