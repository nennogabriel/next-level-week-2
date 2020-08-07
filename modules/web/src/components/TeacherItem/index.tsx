import React from 'react';

import whatssappIcon from '../../../src/assets/icons/whatsapp.svg'

import './styles.css'
import { create } from 'domain';
import api from '../../services/api';

export interface Teacher {
  id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
  cost: number
  subject: string
}

interface TeacherProps {
  teacher: Teacher
}


const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('connections', { user_id: teacher.id })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="foto perfil" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          preço/hora
        <strong>
            R$ {teacher.cost}
          </strong>
        </p>
        <a
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatssappIcon} alt="whatsapp" />
        Entrar em Contato
      </a>
      </footer>

    </article>

  );
}

export default TeacherItem;
