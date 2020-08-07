import React, { useState, useEffect } from 'react';


import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';

import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'

import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => setTotalConnections(response.data.total))
  }, [totalConnections])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={landingImg} alt="imagem de fundo" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
          Estudar
        </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
          Dar Aulas
        </Link>
        </div>
        <span className="total-connections">
          total de {totalConnections} conexões já realizadas. <img src={purpleHeartIcon} alt="coração" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
