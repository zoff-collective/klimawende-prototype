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
      intro="Erfolge für die Klimawende wie in Bamberg, Berlin oder München lassen sich fast überall in Deutschland wiederholen. Wir müssen nur wissen, an welchen Stellen wir die Hebel der direkten Demokratie anlegen können."
    />

    <Constraint width="semi-wide" className="so-gehts__constraint">
      <AlternatingList
        items={[
          {
            title: 'Handbuch bestellen',
            link: '/so-gehts/handbuch-bestellen/',
            text:
              'Die inspirierenden Erfolgsbeispiele, die Anleitungen für die Klimawende von unten und die Checkliste für gelungene Kampagnen haben wir in einem schön illustrierten Handbuch zusammengefasst.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            title: 'Direkte Demokratie verstehen',
            text:
              'Mit Bürger- und Volksbegehren führen wir selbst kommunalpolitische Entscheidungen herbei und gestalten damit unsere Städte und Gemeinden. So funktionieren die direktdemokratischen Instrumente für die Klimawende von unten.',
            image: {
              src: '/images/radentscheid.png',
              alt: ''
            }
          },

          {
            title: 'Kohlekraftwerken den Stecker ziehen',
            text:
              'Immer mehr Städte schalten ihre Kohlekraftwerke ab. Einige kommunale Schornsteine qualmen aber noch. Höchste Zeit, per Bürgerentscheid den lokalen Kohleausstieg einzuleiten.',
            image: {
              src: '/images/abschalten.png',
              alt: ''
            }
          },

          {
            title: 'Kohle aus der Fernwärme verbannen',
            text:
              'Indem wir aus kommunalen Fernwärmenetzen Kohlewärme ausschließen, machen wir die Leitungen frei für erneuerbare Energien. Zugleich bringen wir das wirtschaftliche Fundament der Kohlekraftwerke zum Wackeln.',
            image: {
              src: '/images/end-coal.png',
              alt: ''
            }
          },

          {
            title: 'Energieversorgung zurückerobern',
            text:
              'Immer mehr Städte und Gemeinden in Deutschland holen sich die Kontrolle über ihre Strom- und Wärmenetze zurück und gründen eigene Öko-Stadtwerke. Mit Bürgerbegehren können wir die lokale Energiewende anstoßen.',
            image: {
              src: '/images/netz-oder-nie.png',
              alt: ''
            }
          },

          {
            title: 'Mit Stadtwerken Klimapolitik machen',
            text:
              'Kommunale Stadtwerke ermöglichen Städten und Gemeinden, in Fragen der Energiepolitik selbstständig Entscheidungen treffen zu können. Diese Spielräume können auch wir BürgerInnen für die Energiewende nutzen.',
            image: {
              src: '/images/stadtwerke.png',
              alt: ''
            }
          },

          {
            title: 'Vorfahrt für Fahrräder erkämpfen',
            text:
              'Unsere Städte versinken im Blech und ersticken in Abgasen. Die Straßen gehören den Autos, als sei das ein Naturrecht. Doch nun rollt eine Verkehrswende von unten durch das Land – auf Fahrrädern.',
            image: {
              src: '/images/fahrrad.png',
              alt: ''
            }
          },

          {
            title: 'Erfolgreich mobilisieren',
            text:
              'Ein Bürgerbegehren besteht aus vielen kleinen Schritten. Aus vergangenen und aktuell noch laufenden Kampagnen können wir lernen, worauf wir achten müssen und was besonders gut funktioniert.',
            image: {
              src: '/images/diskussion.png',
              alt: ''
            }
          }
        ]}
      />
    </Constraint>
  </div>
);

export default withLayout("So geht's", Page);
