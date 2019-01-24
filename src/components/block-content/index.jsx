import React from 'react';

import Button from '../form/button';
import Constraint from '../constraint';
import Goals from '../goals';
import Headline from '../text/headline';
import Paragraph from '../text/paragraph';
import Statistic from '../statistic';

import './style.scss';

export default ({ blocks, children }) => (
  <section className="block-content">
    {blocks.map(({ type, content, ...rest }) => {
      switch (type) {
        case 'headline-2':
          return (
            <Constraint className="block-content__headline-container">
              <Headline level="2" levelStyle="3" underlined>
                {content}
              </Headline>
            </Constraint>
          );

        case 'statistic':
          return <Statistic number={rest.number} text={content} />;

        case 'goals':
          return (
            <Constraint>
              <Goals title={content} items={rest.goals} />
            </Constraint>
          );

        case 'button':
          return <Button href={rest.href}>{content}</Button>;

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
              <Paragraph text={content} />
            </Constraint>
          );
      }
    })}

    {children}
  </section>
);
