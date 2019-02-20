import { graphql } from 'gatsby';
import React from 'react';

import BlockContent from '../../components/block-content';
import Content from '../../components/content';
import Headline from '../../components/text/headline';
import Intro from '../../components/intro';
import LogoCarpet from './logo-carpet';
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
            title="„Klimawende von unten“ ist ein Projekt von"
            items={partner}
          />
        </div>

        <Headline level="2" levelStyle="2" centered>
          Das Projekt „Klimawende von unten“ wird unterstützt von
        </Headline>

        <LogoCarpet
          logos={[
            '/images/partners/350.png',
            '/images/partners/adfc.png',
            '/images/partners/bund.png',

            '/images/partners/changing-cities.png',
            '/images/partners/greenpeace.png',
            '/images/partners/klima-allianz.png',

            '/images/partners/naturfreunde.png'
          ]}
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
        content
        src
        alt
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
