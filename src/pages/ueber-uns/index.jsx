import { graphql } from 'gatsby';
import React from 'react';

import BlockContent from '../../components/block-content';
import Content from '../../components/content';
import Headline from '../../components/text/headline';
import Intro from '../../components/intro';
import Paragraph from '../../components/text/paragraph';
import Partner from './partner';
import withLayout from '../../components/with-layout';

import './style.scss';

export default withLayout(
  'Über uns',
  ({
    data: {
      content: { title, intro, blocks },
      partner: { edges: partner }
    }
  }) => (
    <div className="ueber-uns">
      <Intro title={title} intro={intro} />

      <BlockContent blocks={blocks} />

      <Content>
        <div className="ueber-uns__partner-container">
          <Partner
            title="Klimawende von unten ist ein Projekt von"
            items={partner}
          />
        </div>

        <Headline level="2" levelStyle="2">
          Mit freundlicher Unterstützung
        </Headline>

        <Paragraph
          text="
          der Klima-Allianz Deutschland, Greenpeace, Bund für Umwelt und
          Naturschutz Deutschland (BUND), NaturFreunde Deutschlands, 350.org,
          ADFC, Changing Cities
        "
        />
      </Content>
    </div>
  )
);

export const query = graphql`
  query {
    content: pagesJson(id: { eq: "ueber-uns" }) {
      id
      title
      intro
      blocks {
        type
        src
        alt
        content
        href
      }
    }

    partner: allPartnerJson {
      edges {
        node {
          title
          intro
          address
          link
          image
        }
      }
    }
  }
`;
