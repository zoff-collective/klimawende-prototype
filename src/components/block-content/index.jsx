import React from 'react';

import Blockquote from '../text/blockquote';
import Button from '../form/button';
import Constraint from '../constraint';
import Figcaption from '../figcaption';
import Goals from '../goals';
import Headline from '../text/headline';
import Infobox from '../text/infobox';
import Quote from '../quote';
import List from '../text/list';
import Paragraph from '../text/paragraph';
import PowerPlant from '../power-plant';
import Timeline from '../timeline';

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

        case 'headline-3':
          return (
            <Constraint className="block-content__headline-container">
              <Headline level="3" levelStyle="3">
                {content}
              </Headline>
            </Constraint>
          );

        case 'blockquote':
          return (
            <Constraint>
              <Blockquote author={rest.author}>{content}</Blockquote>
            </Constraint>
          );

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

              {rest.caption && <Figcaption content={rest.caption} />}
            </Constraint>
          );

        case 'list':
          return (
            <Constraint>
              <List items={rest.items} />
            </Constraint>
          );

        case 'infobox':
          return (
            <Constraint>
              <Infobox content={content} title={rest.title} />
            </Constraint>
          );

        case 'timeline':
          return (
            <Constraint>
              <Timeline items={rest.timelineItems} />
            </Constraint>
          );

        case 'power-plant':
          return (
            <Constraint>
              <PowerPlant
                title={rest.title}
                sections={rest.powerPlantSections}
              />
            </Constraint>
          );

        case 'quote':
          return (
            <Constraint>
              <Quote
                image={rest.quoteAuthorImage}
                author={rest.quoteAuthor}
                description={rest.quoteAuthorDescription}
              >
                {content}
              </Quote>
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
