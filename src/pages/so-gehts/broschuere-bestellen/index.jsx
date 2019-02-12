import { graphql } from 'gatsby';
import React from 'react';

import Button from '../../../components/form/button';
import Content from '../../../components/content';
import FormGroup from '../../../components/form/group';
import Headline from '../../../components/text/headline';
import Input from '../../../components/form/input';
import Intro from '../../../components/intro';
import Select from '../../../components/form/select';
import withLayout from '../../../components/with-layout';

import './style.scss';

export default withLayout(
  'Broschüre',
  ({
    data: {
      content: { title, intro }
    }
  }) => (
    <div className="broschuere">
      <Intro title={title} intro={intro} />

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
        <form action="/so-gehts/broschuere/done" method="post">
          <Headline level="2" levelStyle="3">
            Gedruckte Broschüre bestellen
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

          <FormGroup type="submit">
            <Button>Bestellen</Button>
          </FormGroup>
        </form>
      </Content>
    </div>
  )
);

export const query = graphql`
  query {
    content: pagesJson(id: { eq: "broschuere" }) {
      title
      intro
    }
  }
`;
