import { graphql } from 'gatsby';
import React from 'react';

import Button from '../../../components/form/button';
import Content from '../../../components/content';
import FormGroup from '../../../components/form/group';
import Headline from '../../../components/text/headline';
import Input from '../../../components/form/input';
import Intro from '../../../components/intro';
import Paragraph from '../../../components/text/paragraph';
import Select from '../../../components/form/select';
import withLayout from '../../../components/with-layout';

import './style.scss';

export default withLayout(
  'Broschüre',
  ({
    data: {
      content: { title, intro, image }
    }
  }) => (
    <div className="so-gehts">
      <Intro title={title} intro={intro} image={image} />

      <section className="so-gehts__download">
        <Content>
          <Headline level="2" levelStyle="2" centered>
            Handbuch „Klimawende von unten“ herunterladen
          </Headline>
          <p className="so-gehts__download-text">PDF, 2.5Mb</p>
          <Button href="/handbuch/download">Download</Button>
        </Content>
      </section>

      <Content>
        <form action="/so-gehts/handbuch-bestellen/done" method="post">
          <Headline level="2" levelStyle="3">
            Handbuch „Klimawende von unten“ bestellen
          </Headline>

          <FormGroup>
            <Input label="Vorname" name="firstname" error />
            <Input label="Nachname" name="lastname" />
          </FormGroup>

          <FormGroup>
            <Input label="Strasse & Hausnummer" name="address" />
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
              error
            />

            <Select
              label="Anzahl"
              name="count"
              width="1-5"
              options={[
                ['1', '1', { selected: true }],
                ['2', '2'],
                ['3', '3'],
                ['4', '4'],
                ['5', '5']
              ]}
            />
          </FormGroup>

          <FormGroup>
            <Input label="Email" type="email" name="email" />
          </FormGroup>

          <Paragraph text="Für Bestellungen aus dem Ausland oder von einer größeren Menge an Exemplaren, kontaktiere bitte <a href='mailto:bestellungen@klimawende.org'>bestellungen@klimawende.org</a>." />

          <FormGroup type="submit">
            <Button>Bestellen</Button>
          </FormGroup>
        </form>

        <Paragraph text="Die Erstellung und der Versand dieses Handbuchs sowie die Beratung und Kampagnenunterstützung kosten einiges an Geld. Wir freuen uns daher über eine Spende auf das im Footer angegebene Konto. Selbstverständlich ist die Bestellung aber auch ohne eine Spende möglich." />
      </Content>
    </div>
  )
);

export const query = graphql`
  query {
    content: pagesJson(id: { eq: "broschuere" }) {
      title
      intro
      image {
        src
        alt
      }
    }
  }
`;
