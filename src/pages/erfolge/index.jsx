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
      intro="Kleine Gruppen engagierter Menschen haben es geschafft, ganze Städte zu verändern. Sie haben sich nicht von den Konzernen mit ihren Millionenbudgets und ihren UnterstützerInnen in der Politik einschüchtern lassen, die ihnen einreden wollten: Alles viel zu teuer. Geht nicht. Die folgenden Geschichten zeigen: Geht eben doch."
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
