import React from 'react';
import ImagePopup from './ImagePopup';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

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
        {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
        ))}
      </div>
      <ImagePopup
        isOpen={props.isOpenImagePopup}
        card={props.card}
        onClose={props.closePopups}
      />
    </>
  );
}

export default Main;
