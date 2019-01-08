import React from 'react';
import withLayout from '../../components/with-layout';

export default withLayout(
  'Projekt',
  ({
    pageContext: {
      project: { title }
    }
  }) => (
    <>
      <h1>{title}</h1>
    </>
  )
);
