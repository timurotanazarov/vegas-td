import React from 'react'
import AboutImg from '../../../public/images/aboutimg.png'
import ArrowIcon from '../../assets/icons/ArrowIcon'

function about() {
  return (
    <div id='about' className="about">
      <div className="container">
        <div className="about-row">
          <h3 className="about-title">Новые артефакты</h3>
          <div className="about-wrap">
            <div className="about-img">
              <img src={AboutImg} alt="" />
            </div>
            <div className="about-content">
              <h5 className="about-content__title">Kurische Nehrung 24</h5>
              <div className="about-content__subtitles">
                <p>Вот вам яркий пример современных тенденций — начало повседневной работы по формированию позиции выявляет срочную потребность методов управления процессами.</p>
                <p>Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.</p>
              </div>
              <a href="#" className="about-content__link">Читать далее <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about