import React from 'react';
import { Link } from 'react-router-dom';

import whatssappIcon from '../../../src/assets/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/1161565?s=460&u=39d8251a7defffbb73343024d4184952b1e205c6&v=4" alt="foto perfil" />
        <div>
          <strong>Pedro Moreno</strong>
          <span>Economia</span>
        </div>
      </header>
      <p> algum texto legal e diferentinho <br /> algum texto legal e diferentinho <br /> </p>
      <footer>
        <p>
          preço/hora
        <strong>
            R$ 70,00
        </strong>
        </p>
        <button type="button">
          <img src={whatssappIcon} alt="whatsapp" />
        Entrar em Contato
      </button>
      </footer>

    </article>

  );
}

export default TeacherItem;