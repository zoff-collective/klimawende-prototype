import { graphql } from 'gatsby';
import React from 'react';

import Content from '../../components/content';
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
        <Paragraph text="Du hast eine Idee, wie du in deiner Stadt oder Gemeinde die Klimawende von unten starten kannst? Dann melde Dich bei Eric Häublein von Bürgerbegehren Klimaschutz oder Franziska Buch vom Umweltinstitut. Wir beraten dich gerne zu inhaltlichen und formalen Fragen, erarbeiten gemeinsam mit dir einen Kampagnenplan oder unterstützen die Mobilisierung!" />

        <Paragraph text="Du hast konkrete Fragen zu den Regelungen für Bürgerbegehren in deinem Bundesland? Dann bist Du bei Susanne Socher von Mehr Demokratie an der richtigen Adresse." />

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
