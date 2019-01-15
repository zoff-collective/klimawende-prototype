import React from 'react';

import Person from './person';

import './style.scss';

export default ({ persons = [] }) => (
  <ul className="person-list">
    {persons.map(person => (
      <Person {...person.node} />
    ))}
  </ul>
);
