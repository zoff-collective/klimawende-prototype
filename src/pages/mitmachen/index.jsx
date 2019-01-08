import Link from 'gatsby-link';
import React from 'react';

import withLayout from '../../components/with-layout';

import projects from '../../../data/projects';

const List = () => (
  <>
    <ul>
      <li>
        {projects.map(({ title, slug }) => (
          <Link to={`/mitmachen/${slug}/`}>{title}</Link>
        ))}
      </li>
    </ul>
  </>
);

export default withLayout('Mitmachen', List);
