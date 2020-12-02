function Main() {
  return(
    <>
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo"></div>
        <div className="user-info__data">
          <h1 className="user-info__name">Жак-Ив Кусто</h1>
          <p className="user-info__job">Исследователь океана</p>
          <button className="button user-info__edit-button">Edit</button>
        </div>
        <button className="button user-info__button">+</button>
      </div>
    </div>
    <div className="places-list root__section">
    </div>
    </>
  )
}

export default Main;