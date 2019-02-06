import { graphql } from 'gatsby';
import React from 'react';

import Button from '../../components/form/button';
import Constraint from '../../components/constraint';
import IntroFilter from './intro-filter';
import Participate from '../../components/participate';
import Project from './project';
import withLayout from '../../components/with-layout';

import './style.scss';

const List = ({
  data: {
    projects: { edges: projects }
  },
  pageContext: { state: federalState }
}) => (
  <div className="mitmachen">
    <IntroFilter resultsTitle="Ergebnisse" activeState={federalState} />

    <Constraint width="wide" className="mitmachen__content-container">
      <ul className="mitmachen__project-list">
        {projects.map(({ node }) => (
          <li className="mitmachen__project-list-item">
            <Project {...node} />
          </li>
        ))}
      </ul>

      <Participate
        title="Und jetzt du!"
        intro="Deine Kampagne ist noch nicht dabei? Trag Sie schnell ein ..."
        share={false}
      >
        <Button theme="yellow" href="/mitmachen/">
          Trag deine Kampagne ein
        </Button>
      </Participate>
    </Constraint>
  </div>
);

export const query = graphql`
  query {
    projects: allProjectsJson {
      edges {
        node {
          slug
          title
          location
          type
          date
          category
          summary
          state
          image {
            src
            alt
          }
        }
      }
    }
  }
`;

export default withLayout('Mitmachen', List);
