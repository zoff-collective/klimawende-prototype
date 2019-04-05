import { graphql } from 'gatsby';
import React from 'react';

import BlockContent from '../../../components/block-content';
import Button from '../../../components/form/button';
import Constraint from '../../../components/constraint';
import Intro from '../../../components/intro';
import Participate from '../../../components/participate';
import withLayout from '../../../components/with-layout';

import '../style.scss';

const Page = ({
  data: {
    content: { title, intro, image, blocks }
  }
}) => (
  <div className="so-gehts">
    <Intro title={title} intro={intro} image={image} />

    <section className="so-gehts__body">
      <Constraint width="wide" className="so-gehts__body-constraint">
        <div className="so-gehts__body-content-container">
          <BlockContent blocks={blocks} />
        </div>

        <div className="so-gehts__body-action-container">
          <Participate
            title="Wir beraten Dich!"
            intro="Du möchtest an diesem Standort ein Bürgerbegehren starten, hast aber viele offenen Fragen?"
            share={false}
          >
            <Button theme="current" fullWidth>
              Zur Beratung
            </Button>
          </Participate>
        </div>
      </Constraint>
    </section>
  </div>
);

export default withLayout('Kohlekraftwerken den Stecker ziehen', Page);

export const query = graphql`
  query {
    content: pagesJson(id: { eq: "kohlekraftwerken-den-stecker-ziehen" }) {
      id
      title
      intro
      image {
        src
        alt
      }
      blocks {
        type
        content
        src
        alt
        items
        title
        powerPlantSections {
          title
          content
        }
        timelineItems {
          title
          content
        }
        quoteAuthor
        quoteAuthorDescription
        quoteAuthorImage
      }
    }
  }
`;
