import React from 'react'
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup (props) {

  const avatarRef = React.useRef();

  function handleSubmit (event) {
    event.preventDefault();

      props.onUpdateAvatar({
        avatar: avatarRef.current.value
      });
  }

  return (
    <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        >
        <input
          type="url"
          name="avatarlikn"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на аватар"
          required={true}
          ref={avatarRef}
        />
        <span id="avatar-error" className="popup__error"></span>
        <button id="avatar-button" className="button popup__button popup__button_type_profile">Сохранить</button>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;