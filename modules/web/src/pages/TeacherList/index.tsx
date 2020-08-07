import React, { useState, FormEvent } from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([])

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/', { params: { subject, weekDay, time } })
    setTeachers(response.data)
  }

  return (
    <div id="page-teachers-list" >
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "História", label: "História" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "Português", label: "Português" },
              { value: "Matemática", label: "Matemática" },
            ]}
          />
          <Select
            name="week-day"
            label="Dia da Semana"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => <TeacherItem teacher={teacher} />)}
      </main>
    </div>
  );
}

export default TeacherList;
