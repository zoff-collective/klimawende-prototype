import { graphql } from 'gatsby';
import React from 'react';

import Content from '../../components/content';
import Headline from '../../components/text/headline';
import Intro from '../../components/intro';
import Paragraph from '../../components/text/paragraph';
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

      <Content className="beratung__constraint">
        <Headline level="2" levelStyle="2" centered>
          Beratung und Kampagnenunterstützung
        </Headline>
        <Paragraph text="Die HerausgeberInnen beraten zu organisatorischen wie inhaltlichen Fragen bei der Initiierung und Umsetzung von Bürgerbegehren und unterstützen bei der Kampagnen- und Mobilisierungsarbeit." />

        {persons && <PersonList persons={persons.edges} />}
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
