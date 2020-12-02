import Header from './Header';
import Main from './Main';
import closeImage from '../images/close.svg';

function App() {
  return (
    <>
    <Header />
    <Main />
    <div className="popup popup_type_place">
      <div className="popup__content">
        <img src={closeImage} alt="" className="popup__close"/>
        <h3 className="popup__title">Новое место</h3>
        <form className="popup__form" name="new">
            <input type="text" name="placename" className="popup__input popup__input_type_name" placeholder="Название" required={true} minLength="2" maxLength="30"/>
            <span id="name-error" className="popup__error"></span>
            <input type="url" name="link" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" required={true}/>
            <span id="link-error" className="popup__error"></span>
            <button id="place-button" className="button popup__button ">+</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_profile">
      <div className="popup__content profile-content">
        <img src={closeImage} alt="" className="popup__close"/>
        <h3 className="popup__title">Редактировать профиль</h3>
        <form className="popup__form" name="profile">
            <input type="text" name="username" className="popup__input popup__input_type_name" placeholder="Имя" minLength="2" maxLength="30" required={true}/>
            <span id="username-error" className="popup__error"></span>
            <input type="text" name="about" className="popup__input popup__input_type_about" placeholder="О себе" minLength="2" maxLength="30" required={true}/>
            <span id="about-error" className="popup__error"></span>
            <button id="profile-button" className="button popup__button popup__button_type_profile">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_avatar">
      <div className="popup__content avatar-content">
        <img src={closeImage} alt="" className="popup__close"/>
        <h3 className="popup__title">Обновить аватар</h3>
        <form className="popup__form" name="avatar">
            <input type="url" name="avatarlikn" className="popup__input popup__input_type_avatar" placeholder="Ссылка на аватар" required={true}/>
            <span id="avatar-error" className="popup__error"></span>
            <button id="avatar-button" className="button popup__button popup__button_type_profile">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_image">
      <div className="popup__content popup__content_type_image">
        <img src={closeImage} alt="" className="popup__close"/>
      </div>
    </div>
    </>
  );
}

export default App;
