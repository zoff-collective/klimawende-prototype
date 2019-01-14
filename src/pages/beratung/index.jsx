import { graphql } from 'gatsby';
import React from 'react';

import Content from '../../components/content';
import Intro from '../../components/intro';
import PersonList from './person-list';
import withLayout from '../../components/with-layout';

import './style.scss';

export default withLayout(
  'Beratung',
  ({
    data: {
      content: { title, intro },
      persons
    }
  }) => (
    <div className="beratung">
      <Intro title={title} intro={intro} />
      <Content>
        <PersonList persons={persons.edges} />
      </Content>
    </div>
  )
);

export const query = graphql`
  query {
    content: pagesJson(id: { eq: "beratung" }) {
      id
      title
      intro
    }

    persons: allPersonsJson {
      edges {
        node {
          id
          name
          intro
          email
          phone
          image
        }
      }
    }
  }
`;
