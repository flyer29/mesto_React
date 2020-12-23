import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `place-card__delete-icon ${isOwn && 'place-card__delete-icon_visible'}`
  );
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `place-card__like-icon ${isLiked && 'place-card__like-icon_liked'}`
  );

  function handleCardClick() {
    return props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleCardDelete() {
    props.onCardDelete(props.card._id)
  }

  return (
    <div className="place-card">
      <div
        className="place-card__image"
        onClick={handleCardClick}
        style={ { backgroundImage: `url(${props.card.link})` } }
      ></div>
      <button className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
      <div className="place-card__description">
        <h3 className="place-card__name">{props.card.name}</h3>
        <div className="place-card__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="place-card__likes-number">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
