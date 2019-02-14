import React from 'react';

import AlternatingList from '../../components/alternating-list';
import Constraint from '../../components/constraint';
import Intro from '../../components/intro';
import withLayout from '../../components/with-layout';

import './style.scss';

const Page = () => (
  <div className="so-gehts">
    <Intro
      title="So geht's"
      intro="Ein Bürgerbegehren besteht aus lauter kleinen Schritten. Zunächst verschaffen wir dem Thema eine Öffentlichkeit. Dann zwingen wir die lokale Politik, Farbe zu bekennen und sich zur Klimawende zu positionieren. Wenn sie sich weigert, erhöhen wir den Druck – und führen die Entscheidung irgendwann selbst herbei. Jede dieser Etappen ist für sich genommen schon ein Sieg. Eine Bürgerbegehrens-Kampagne kann also nicht wirklich scheitern. Die Frage ist vielmehr, wie viel sie gewinnt."
    />

    <Constraint className="so-gehts__constraint">
      <AlternatingList
        items={[
          {
            title: 'Broschüre bestellen',
            text:
              '„Stell dir vor, es ist Sonntag und du kannst ein Kohlekraftwerk abschalten“, schrieb ein Münchner Stadtmagazin Ende 2017. Der Sonntag kam – und die MünchnerInnen trafen ihre Entscheidung.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            title: 'Direkte Demokratie',
            text:
              '„Stell dir vor, es ist Sonntag und du kannst ein Kohlekraftwerk abschalten“, schrieb ein Münchner Stadtmagazin Ende 2017. Der Sonntag kam – und die MünchnerInnen trafen ihre Entscheidung.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            title: 'Kohlekraftwerke abschalten',
            text:
              '„Stell dir vor, es ist Sonntag und du kannst ein Kohlekraftwerk abschalten“, schrieb ein Münchner Stadtmagazin Ende 2017. Der Sonntag kam – und die MünchnerInnen trafen ihre Entscheidung.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            title: 'Fernwärme ohne Kohle',
            text:
              '„Stell dir vor, es ist Sonntag und du kannst ein Kohlekraftwerk abschalten“, schrieb ein Münchner Stadtmagazin Ende 2017. Der Sonntag kam – und die MünchnerInnen trafen ihre Entscheidung.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            title: 'Energieversorgung zurückerobern',
            text:
              '„Stell dir vor, es ist Sonntag und du kannst ein Kohlekraftwerk abschalten“, schrieb ein Münchner Stadtmagazin Ende 2017. Der Sonntag kam – und die MünchnerInnen trafen ihre Entscheidung.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            title: 'Ökologische Stadtwerke',
            text:
              '„Stell dir vor, es ist Sonntag und du kannst ein Kohlekraftwerk abschalten“, schrieb ein Münchner Stadtmagazin Ende 2017. Der Sonntag kam – und die MünchnerInnen trafen ihre Entscheidung.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            title: 'Vorfahrt für Fahrräder',
            text:
              '„Stell dir vor, es ist Sonntag und du kannst ein Kohlekraftwerk abschalten“, schrieb ein Münchner Stadtmagazin Ende 2017. Der Sonntag kam – und die MünchnerInnen trafen ihre Entscheidung.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            title: 'Kampagnen-Checkliste',
            text:
              '„Stell dir vor, es ist Sonntag und du kannst ein Kohlekraftwerk abschalten“, schrieb ein Münchner Stadtmagazin Ende 2017. Der Sonntag kam – und die MünchnerInnen trafen ihre Entscheidung.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          }
        ]}
      />
    </Constraint>
  </div>
);

export default withLayout("So geht's", Page);
