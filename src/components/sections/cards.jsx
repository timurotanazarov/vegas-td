import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardImg1 from '../../../public/images/cardimg1.png'
import CardImg2 from '../../../public/images/cardimg2.png'
import CardImg3 from '../../../public/images/cardimg3.png'
import CardImg4 from '../../../public/images/cardimg4.png'

function cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (
    <div id='cards' className="cards">
      <div className="container">
        <div className="cards-row">
            <Slider {...settings}>
              <div className="cards-card">
                <div className="card-img">
                  <img src={CardImg1} alt="" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Fig. 1 (plant)</h5>
                  <p className="card-subtitle">Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.</p>
                  <div className="card-button">Подробнее</div>
                </div>
              </div>
              <div className="cards-card">
                <div className="card-img">
                  <img src={CardImg2} alt="" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Fig. 2 (flower)</h5>
                  <p className="card-subtitle">Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.</p>
                  <div className="card-button">Подробнее</div>
                </div>
              </div>
              <div className="cards-card">
                <div className="card-img">
                  <img src={CardImg3} alt="" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Fig. 3 (leaf)</h5>
                  <p className="card-subtitle">Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.</p>
                  <div className="card-button">Подробнее</div>
                </div>
              </div>
              <div className="cards-card">
                <div className="card-img">
                  <img src={CardImg4} alt="" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Fig. 4 (wood)</h5>
                  <p className="card-subtitle">Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.</p>
                  <div className="card-button">Подробнее</div>
                </div>
              </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default cards;