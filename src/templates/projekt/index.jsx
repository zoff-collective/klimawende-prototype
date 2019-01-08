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
      project: { title, intro, tags, blocks }
    }
  }) => (
    <article className="project">
      <Intro theme="mitmachen" title={title}>
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

      <Person
        name="Isabella Wach"
        byline="war bei „Raus aus der Steinkohle“ aktiv. Die Sommerbräune von den Sammelaktionen ist inzwischen wieder weg. Einige der Freundschaften sind aber geblieben."
        quote="Es war das erste Mal, dass ich für etwas Unterschriften gesammelt habe. Ich dachte, die Leute würden total genervt auf uns reagieren. Aber im Gegenteil: Bis auf ein paar Klimawandel-Leugner haben die sich fast alle gefreut, dass wir das machen. Besonders im Sommer am Ufer der Isar hat so gut wie jeder unterschrieben."
      />
    </article>
  )
);
