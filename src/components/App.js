import React from 'react';
import Header from './Header';
import Main from './Main';


function App() {

  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const[isEditAvatarPopupOpen, setiIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleEditAvatarClick() {
    setiIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <>
    <Header />
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      isOpenProfilePopup={isEditProfilePopupOpen}
      isOpenPlacePopup={isAddPlacePopupOpen}
      isOpenAvatarPopup={isEditAvatarPopupOpen}
     />
    </>
  );
}

export default App;
