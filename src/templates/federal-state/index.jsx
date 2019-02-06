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
