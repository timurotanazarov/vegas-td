import React from 'react'

function contacts() {
  return (
    <div id='contacts' className="contacts">
      <div className="container">
        <div className="contacts-row">
          <h3 className="contacts-title">Помочь проекту</h3>
          <p className="contacts-subtitle">Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</p>
          <form className="contacts-form">
            <input type="text" placeholder='Имя'/>
            <input type="email" placeholder='Email'/>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contacts