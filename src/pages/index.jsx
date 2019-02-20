import React from 'react';

import AlternatingList from '../components/alternating-list';
import Constraint from '../components/constraint';
import Headline from '../components/text/headline';
import Intro from '../components/intro';
import withLayout from '../components/with-layout';

import './style.scss';

const getTitleComponent = (theme, title) => (
  <div
    className={`start__title-container start__title-container--theme-${theme}`}
  >
    <Headline level="2" levelStyle="2" underlined>
      {title}
    </Headline>
  </div>
);

const Page = () => (
  <div className="start">
    <Intro
      title="Klimawende von unten"
      backgroundImage={{ src: '/images/start-intro.png' }}
    />

    <p className="start__intro-divider">
      Wie wir durch direkte Demokratie die Klimapolitik in die Hand nehmen
    </p>

    <Constraint width="semi-wide" className="start__constraint">
      <AlternatingList
        items={[
          {
            titleComponent: getTitleComponent(
              'mitmachen',
              'Finde eine Kampagne in deiner Nähe'
            ),
            link: '/mitmachen/',
            text:
              'Auf einer Karte findest Du Bürgerbegehren und andere Klimawende-Kampagnen. Wenn Du bei einem Projekt mitmachen möchtest, kannst Du Dich in einen Info-Verteiler eintragen. Die Aktiven schreiben Dir, wie Du sie unterstützen kannst. Oder trag Deine eigene Initiative ein – und finde MitstreiterInnen.',
            image: {
              src: '/images/karte.png',
              alt: ''
            }
          },

          {
            titleComponent: getTitleComponent(
              'mitmachen',
              'Lass dich von erfolgreichen Bürgerentscheid inspirieren'
            ),
            link: '/erfolge/',
            text:
              'Kleine Gruppen engagierter Menschen haben es geschafft, ganze Städte zu verändern. Sie haben sich nicht von den Konzernen mit ihren Millionenbudgets und ihren UnterstützerInnen in der Politik einschüchtern lassen, die ihnen einreden wollten: Alles viel zu teuer. Geht nicht. Die folgenden Geschichten zeigen: Geht eben doch.',
            image: {
              src: '/images/demonstration.png',
              alt: ''
            }
          },

          {
            titleComponent: getTitleComponent(
              'so-gehts',
              'Bestell das Handbuch zur Klimawende'
            ),
            link: '/so-gehts/handbuch-bestellen/',
            text:
              'Die inspirierenden Erfolgsbeispiele, die Anleitungen für die Klimawende von unten und die Checkliste für gelungene Kampagnen haben wir in einem schön illustrierten Handbuch zusammengefasst. Dort kannst du nachlesen, wo es Kohlekraftwerke oder Fernwärmenetze in städtischer Hand gibt, wie Du die Energieversorgung in Deiner Gemeinde wieder in öffentliche Hand bringst oder die Verkehrswende einläutest.',
            image: {
              src: '/images/broschuere.png',
              alt: ''
            }
          },

          {
            titleComponent: getTitleComponent(
              'beratung',
              'Wir beraten Dich gerne'
            ),
            link: '/beratung/',
            text:
              'Du hast eine erste Idee, wie Du in Deiner Stadt die Klimawende starten kannst? Wir beraten Dich gerne zu inhaltlichen und formalen Fragen, erarbeiten gemeinsam mit Dir einen Kampagnenplan oder unterstützen die Mobilisierung!',
            image: {
              src: '/images/diskussion.png',
              alt: ''
            }
          },

          {
            titleComponent: getTitleComponent(
              'so-gehts',
              'So startest du die Klimawende in deiner Stadt'
            ),
            link: '/so-gehts/',
            text:
              'Erfolge für die Klimawende wie in Bamberg, Berlin oder München lassen sich fast überall in Deutschland wiederholen. Erfahre hier, wie Du dafür sorgen kannst, dass in Deiner Gemeinde die Kohle durch Öko-Energie ersetzt wird, Solaranlagen auf die Dächer kommen oder neue Radwege entstehen.',
            image: {
              src: '/images/diskussion-tisch.png',
              alt: ''
            }
          }
        ]}
      />
    </Constraint>
  </div>
);

export default withLayout('Startseite', Page);
