import { graphql } from 'gatsby';
import React from 'react';

import Intro from '../../../components/intro';
import withLayout from '../../../components/with-layout';

import '../style.scss';

const Page = ({
  data: {
    content: { title, intro, image }
  }
}) => (
  <div className="so-gehts">
    <Intro title={title} intro={intro} image={image} />
  </div>
);

export default withLayout('Direkte Demokratie verstehen', Page);

export const query = graphql`
  query {
    content: pagesJson(id: { eq: "direkte-demokratie-verstehen" }) {
      id
      title
      intro
      image {
        src
        alt
      }
    }
  }
`;
