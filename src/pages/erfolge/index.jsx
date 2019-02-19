import { graphql } from 'gatsby';
import React from 'react';

import AlternatingList from '../../components/alternating-list';
import Constraint from '../../components/constraint';
import Intro from '../../components/intro';
import withLayout from '../../components/with-layout';

import './style.scss';

const Page = ({
  data: {
    projects: { edges: projects }
  }
}) => (
  <div className="erfolge">
    <Intro
      title="Erfolge"
      intro="Ein Bürgerbegehren besteht aus lauter kleinen Schritten. Zunächst verschaffen wir dem Thema eine Öffentlichkeit. Dann zwingen wir die lokale Politik, Farbe zu bekennen und sich zur Klimawende zu positionieren. Wenn sie sich weigert, erhöhen wir den Druck – und führen die Entscheidung irgendwann selbst herbei. Jede dieser Etappen ist für sich genommen schon ein Sieg. Eine Bürgerbegehrens-Kampagne kann also nicht wirklich scheitern. Die Frage ist vielmehr, wie viel sie gewinnt."
    />

    <Constraint width="semi-wide" className="erfolge__constraint">
      <AlternatingList
        items={projects
          .filter(({ node: { bestPractice } }) => bestPractice === true)
          .map(({ node: { title, slug, summary, image } }) => ({
            title,
            image,
            text: summary,
            link: `/mitmachen/${slug}/`
          }))}
      />
    </Constraint>
  </div>
);

export const query = graphql`
  query {
    projects: allProjectsJson {
      edges {
        node {
          bestPractice
          slug
          title
          summary
          image {
            src
            alt
          }
        }
      }
    }
  }
`;

export default withLayout('Erfolge', Page);
