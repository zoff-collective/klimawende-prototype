import React from 'react';

import Headline from '../text/headline';
import Paragraph from '../text/paragraph';

import './style.scss';

export default ({ title, sections }) => (
  <section className="power-plant">
    <Headline level="3" levelStyle="3">
      {title}
    </Headline>

    {sections.map(({ title: sectionTitle, content }) => (
      <>
        {sectionTitle && (
          <Headline level="4" levelStyle="5">
            {sectionTitle}
          </Headline>
        )}

        <Paragraph text={content} />
      </>
    ))}
  </section>
);
