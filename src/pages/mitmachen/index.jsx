import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../components/constraint';
import IntroFilter from './intro-filter';
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

    <Constraint>
      <ul className="mitmachen__project-list">
        {projects.map(({ node }) => (
          <li className="mitmachen__project-list-item">
            <Project {...node} />
          </li>
        ))}
      </ul>
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
        }
      }
    }
  }
`;

export default withLayout('Mitmachen', List);
