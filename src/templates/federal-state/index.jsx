import { graphql } from 'gatsby';

import Mitmachen from '../../pages/mitmachen';

export default Mitmachen;

export const query = graphql`
  query {
    projects: allProjectsJson {
      edges {
        node {
          slug
          title
          place
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
