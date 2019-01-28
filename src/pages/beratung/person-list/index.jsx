import React from 'react';

import Person from '../../../components/person';

import './style.scss';

export default ({ persons = [] }) => (
  <ul className="person-list">
    {persons.map(person => (
      <li>
        <Person {...person.node} />
      </li>
    ))}
  </ul>
);
