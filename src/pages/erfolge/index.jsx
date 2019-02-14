import React from 'react';

import Intro from '../../components/intro';
import withLayout from '../../components/with-layout';

import './style.scss';

const Page = () => (
  <div className="erfolge">
    <Intro
      title="Erfolge"
      intro="Ein Bürgerbegehren besteht aus lauter kleinen Schritten. Zunächst verschaffen wir dem Thema eine Öffentlichkeit. Dann zwingen wir die lokale Politik, Farbe zu bekennen und sich zur Klimawende zu positionieren. Wenn sie sich weigert, erhöhen wir den Druck – und führen die Entscheidung irgendwann selbst herbei. Jede dieser Etappen ist für sich genommen schon ein Sieg. Eine Bürgerbegehrens-Kampagne kann also nicht wirklich scheitern. Die Frage ist vielmehr, wie viel sie gewinnt."
    />
  </div>
);

export default withLayout('Erfolge', Page);
