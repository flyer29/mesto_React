import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards([...data]);
      })
      .catch((error) => {
        throw error;
      });
  });

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards([...newCards]);
      })
      .catch((error) => {
        throw error;
      });
}

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }}>
          </div>
          <div className="user-info__data">
            <h1 className="user-info__name">{currentUser.name}</h1>
            <p className="user-info__job">{currentUser.about}</p>
            <button className="button user-info__edit-button" onClick={props.onEditProfile}>Edit</button>
          </div>
          <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
        </div>
      </div>
      <div className="places-list root__section">
        {cards.map((card) => (
          <CurrentUserContext.Provider value={currentUser}>
            <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} />
          </CurrentUserContext.Provider>
        ))}
      </div>
      <PopupWithForm
        title="Новое место"
        name="place"
        isOpen={props.isOpenPlacePopup}
        onClose={props.closePopups}>
          <input type="text" name="placename" className="popup__input popup__input_type_name" placeholder="Название" required={true} minLength="2" maxLength="30"/>
          <span id="name-error" className="popup__error"></span>
          <input type="url" name="link" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" required={true}/>
          <span id="link-error" className="popup__error"></span>
          <button id="place-button" className="button popup__button ">+</button>
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={props.isOpenProfilePopup}
        onClose={props.closePopups}>
        <input type="text" name="username" className="popup__input popup__input_type_name" placeholder="Имя" minLength="2" maxLength="30" required={true}/>
        <span id="username-error" className="popup__error"></span>
        <input type="text" name="about" className="popup__input popup__input_type_about" placeholder="О себе" minLength="2" maxLength="30" required={true}/>
        <span id="about-error" className="popup__error"></span>
        <button id="profile-button" className="button popup__button popup__button_type_profile">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={props.isOpenAvatarPopup}
        onClose={props.closePopups}>
        <input type="url" name="avatarlikn" className="popup__input popup__input_type_avatar" placeholder="Ссылка на аватар" required={true}/>
        <span id="avatar-error" className="popup__error"></span>
        <button id="avatar-button" className="button popup__button popup__button_type_profile">Сохранить</button>
      </PopupWithForm>
      <ImagePopup
        isOpen={props.isOpenImagePopup}
        card={props.card}
        onClose={props.closePopups}
      />
    </>
  );
}

export default Main;
