import React from 'react';

import Constraint from '../constraint';
import Headline from '../text/headline';
import Statistic from '../statistic';

import './style.scss';

export default ({ blocks }) => (
  <section className="block-content">
    {blocks.map(({ type, content, ...rest }) => {
      switch (type) {
        case 'headline-2':
          return (
            <Constraint className="block-content__headline-container">
              <Headline level="2" underlined>
                {content}
              </Headline>
            </Constraint>
          );

        case 'statistic':
          return <Statistic number={rest.number} text={content} />;

        case 'image':
          return (
            <Constraint>
              <img
                src={rest.src}
                alt={rest.alt || ''}
                className="block-content__image"
              />
            </Constraint>
          );

        default:
          return (
            <Constraint>
              <p className="block-content__paragraph">{content}</p>
            </Constraint>
          );
      }
    })}
  </section>
);
