import React from 'react';

import BlockContent from '../../components/block-content';
import Content from '../../components/content';
import Headline from '../../components/text/headline';
import Intro from '../../components/intro';
import Paragraph from '../../components/text/paragraph';
import Partner from './partner';
import withLayout from '../../components/with-layout';

import './style.scss';
import { blocks } from '../../../data/ueber-uns.json';
import { partner } from '../../../data/partner.json';

export default withLayout('Über uns', () => (
  <div className="ueber-uns">
    <Intro
      title="Über uns"
      intro="Ein Bürgerbegehren besteht aus lauter kleinen Schritten. Zunächst verschaffen wir dem Thema eine Öffentlichkeit. Dann zwingen wir die lokale Politik, Farbe zu bekennen und sich zur Klimawende zu positionieren. Wenn sie sich weigert, erhöhen wir den Druck – und führen die Entscheidung irgendwann selbst herbei. Jede dieser Etappen ist für sich genommen schon ein Sieg. Eine Bürgerbegehrens-Kampagne kann also nicht wirklich scheitern. Die Frage ist vielmehr, wie viel sie gewinnt."
    />

    <BlockContent blocks={blocks} />

    <Content>
      <div className="ueber-uns__partner-container">
        <Partner
          title="Klimawende von unten ist ein Projekt von"
          items={partner}
        />
      </div>

      <Headline level="2" levelStyle="2">
        Mit freundlicher Unterstützung
      </Headline>

      <Paragraph>
        der Klima-Allianz Deutschland, Greenpeace, Bund für Umwelt und
        Naturschutz Deutschland (BUND), NaturFreunde Deutschlands, 350.org,
        ADFC, Changing Cities
      </Paragraph>
    </Content>
  </div>
));
