import { graphql } from 'gatsby';
import React from 'react';

import Page from '../../components/page';
import withLayout from '../../components/with-layout';

export default withLayout('Impressum', ({ data: { content } }) => (
  <Page {...content} />
));

export const query = graphql`
  query {
    content: pagesJson(id: { eq: "imprint" }) {
      id
      title
      blocks {
        type
        content
      }
    }
  }
`;
