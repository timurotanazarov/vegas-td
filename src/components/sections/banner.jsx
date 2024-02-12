import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'

function banner() {
  return (
    <div id='banner' className="banner">
      <div className="container">
        <div className="banner-row">
          <h2 className="banner-title">Крупнейшая коллекция природных артефактов</h2>
          <p className="banner-subtitle">Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.</p>
          <a href="#" className="banner-link">
          Исследовать <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default banner