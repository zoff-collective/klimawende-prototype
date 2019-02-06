import React from 'react';

import Button from '../../../components/form/button';
import Constraint from '../../../components/constraint';
import Input from '../../../components/form/input';
import FormGroup from '../../../components/form/group';
import Headline from '../../../components/text/headline';
import Paragraph from '../../../components/text/paragraph';
import Textarea from '../../../components/form/textarea';
import withLayout from '../../../components/with-layout';

import '../style.scss';

const Page = () => (
  <div className="mitmachen mitmachen--form">
    <Constraint>
      <Headline level="2" levelStyle="2" underlined>
        Trag deine Kampagne ein
      </Headline>

      <Paragraph text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />

      <form>
        <FormGroup>
          <Headline level="2" levelStyle="4">
            Dein Projekt
          </Headline>
        </FormGroup>

        <FormGroup>
          <Input name="title" label="Projekttitel" />
          <Input name="place" label="Ort" />
        </FormGroup>

        <FormGroup>
          <Input name="url" label="Website (optional)" />
        </FormGroup>

        <FormGroup>
          <Textarea
            name="url"
            label="Beschreibung"
            help="Beschreibe Deine Kampagne: Wer ist aktiv? Wann ist die Kampagne gestartet? Welche Ziele verfolgt ihr?"
            rows="8"
          />
        </FormGroup>

        <FormGroup>
          <Headline level="2" levelStyle="4">
            Deine Kontaktdaten
          </Headline>
        </FormGroup>

        <FormGroup>
          <Input name="name" label="Name" />
        </FormGroup>

        <FormGroup>
          <Input name="email" label="Email" />
          <Input name="telephone" label="Telefon (optional)" />
        </FormGroup>

        <Paragraph text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />

        <FormGroup type="submit">
          <Button type="submit">Projekt eintragen</Button>
        </FormGroup>
      </form>
    </Constraint>
  </div>
);

export default withLayout('Mitmachen - Trag dich ein', Page);
