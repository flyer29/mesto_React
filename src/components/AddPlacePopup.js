import React from 'react';
import PopupWithForm from './PopupWithForm';


function AddPlacePopup (props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    props.onAddPlace({
      name,
      link,
    })
  }

  function nameOnChange(event) {
    setName(event.target.value);
  }

  function linkOnChange(event) {
    setLink(event.target.value);
  }

  return (
    <PopupWithForm
        title="Новое место"
        name="place"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}>
          <input
            type="text"
            name="placename"
            className="popup__input popup__input_type_name"
            placeholder="Название"
            required={true}
            minLength="2"
            maxLength="30"
            onChange={nameOnChange}
            value={name}
            />
          <span id="name-error" className="popup__error"></span>
          <input
            type="url"
            name="link"
            className="popup__input popup__input_type_link-url"
            placeholder="Ссылка на картинку"
            required={true}
            onChange={linkOnChange}
            value={link}
            />
          <span id="link-error" className="popup__error"></span>
          <button id="place-button" className="button popup__button ">+</button>
      </PopupWithForm>
  )
}

export default AddPlacePopup;