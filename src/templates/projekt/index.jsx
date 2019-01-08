import Helmet from 'react-helmet';
import React from 'react';

import BlockContent from '../../components/block-content';
import Intro from '../../components/intro';
import Person from '../../components/person';
import Tag from '../../components/tag';
import withLayout from '../../components/with-layout';

import './style.scss';

export default withLayout(
  'Projekt',
  ({
    pageContext: {
      project: { title, intro, tags, blocks, person }
    }
  }) => (
    <article className="project">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Intro title={title}>
        {tags && (
          <div className="project__tags-container">
            {tags.map(tag => (
              <Tag title={tag} />
            ))}
          </div>
        )}

        <p className="project__intro">{intro}</p>
      </Intro>

      <BlockContent blocks={blocks} />

      {person && <Person {...person} />}
    </article>
  )
);
