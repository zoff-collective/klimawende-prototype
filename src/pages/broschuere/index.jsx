import React from 'react';

import Button from '../../components/form/button';
import Content from '../../components/content';
import FormGroup from '../../components/form/group';
import Headline from '../../components/text/headline';
import Input from '../../components/form/input';
import Intro from '../../components/intro';
import Select from '../../components/form/select';
import withLayout from '../../components/with-layout';

import './style.scss';

export default withLayout('Broschüre', () => (
  <div className="broschuere">
    <Intro
      title="Broschüre"
      intro="Ein Bürgerbegehren besteht aus lauter kleinen Schritten. Zunächst verschaffen wir dem Thema eine Öffentlichkeit. Dann zwingen wir die lokale Politik, Farbe zu bekennen und sich zur Klimawende zu positionieren. Wenn sie sich weigert, erhöhen wir den Druck – und führen die Entscheidung irgendwann selbst herbei. Jede dieser Etappen ist für sich genommen schon ein Sieg. Eine Bürgerbegehrens-Kampagne kann also nicht wirklich scheitern. Die Frage ist vielmehr, wie viel sie gewinnt."
    />

    <section className="broschuere__download">
      <Content>
        <Headline level="2" levelStyle="2" centered>
          Broschüre herunterladen
        </Headline>
        <p className="broschuere__download-text">PDF, 2.5Mb</p>
        <Button href="/broschuere/download">Download</Button>
      </Content>
    </section>

    <Content>
      <form action="/broschuere/done" method="post">
        <Headline level="2" levelStyle="3">
          Gedruckte Broschüre bestellen
        </Headline>

        <FormGroup>
          <Input label="Vorname" name="firstname" />
          <Input label="Nachname" name="lastname" />
        </FormGroup>

        <FormGroup>
          <Input label="Strasse" name="street" />
          <Input label="Nummer" name="number" width="1-5" />
        </FormGroup>

        <FormGroup>
          <Input label="Postleitzahl" name="postalcode" width="1-5" />
          <Input label="Ort" name="location" />
        </FormGroup>

        <FormGroup>
          <Select
            label="Land"
            name="country"
            options={[
              ['germany', 'Deutschland', { selected: true }],
              ['austria', 'Oesterreich']
            ]}
          />

          <Select
            label="Anzahl"
            name="count"
            options={[
              ['1', '1', { selected: true }],
              ['2', '2'],
              ['3', '3'],
              ['4', '4'],
              ['5', '5']
            ]}
          />
        </FormGroup>

        <FormGroup type="submit">
          <Button>Bestellen</Button>
        </FormGroup>
      </form>
    </Content>
  </div>
));
