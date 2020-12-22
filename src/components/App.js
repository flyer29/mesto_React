import React from 'react';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setiIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    api.getUserData()
      .then((data) => {
        editUser(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  function editUser(user) {
    setCurrentUser(user);
  }

  function handleUpdateUser(user) {
    api.editUserProfile(user)
      .then((data) => {
        editUser(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((error) => {
        throw error;
      });
  }

  function handleUpdateAvatar (avatar) {
    api.editUserAvatar(avatar)
      .then((data) => {
        editUser(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((error) => {
        throw error;
      });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setiIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setiIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        isOpenPlacePopup={isAddPlacePopupOpen}
        isOpenImagePopup={isImagePopupOpen}
        card={selectedCard}
        closePopups={closeAllPopups}
      />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
