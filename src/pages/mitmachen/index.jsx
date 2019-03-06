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
}) => {
  let visibleProjects = projects;

  if (federalState) {
    visibleProjects = visibleProjects.filter(
      ({ node: { federalState: projectFederalState } }) =>
        projectFederalState === federalState
    );
  }

  return (
    <div className="mitmachen">
      <IntroFilter
        intro="Gemeinsam schaffen wir die Klimawende! Mach mit bei einer Kampagne in Deiner Nähe oder starte Deine eigene!"
        resultsTitle="Ergebnisse"
        activeState={federalState}
      />

      <Constraint width="wide" className="mitmachen__constraint">
        <div className="mitmachen__content-container">
          {/* eslint-disable react/no-array-index-key */}
          {visibleProjects && (
            <ul className="mitmachen__project-list">
              {visibleProjects.map(({ node }, index) => (
                <li
                  className="mitmachen__project-list-item"
                  key={`mitmachen-${index}`}
                >
                  <Project {...node} />
                </li>
              ))}
            </ul>
          )}
          {/* eslint-enable react/no-array-index-key */}
        </div>

        <div className="mitmachen__participate-container">
          <Participate
            title="DEINE Kampagne fehlt?"
            intro="Du hast bereits eine Kampagne für die Klimawende in Deinem Ort gestartet? Sag uns jetzt Bescheid, damit wir Dein Projekt in die Karte aufnehmen und Dir helfen können, MitstreiterInnen zu finden!"
            share={false}
          >
            <Button theme="current" href="/mitmachen/eintragen/" fullWidth>
              Kampagne melden!
            </Button>
          </Participate>
        </div>
      </Constraint>
    </div>
  );
};

export const query = graphql`
  query {
    projects: allProjectsJson {
      edges {
        node {
          slug
          title
          place
          federalState
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
