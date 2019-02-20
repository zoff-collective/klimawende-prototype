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
        Deine Kampagne auf Klimawende.org!
      </Headline>

      <Paragraph text="Trage hier die wichtigsten Informationen über deine Kampagne ein. Wir kontaktieren Dich im Anschluss und erstellen in Absprache mit dir einen Kampagnen-Steckbrief für die Klimawende-Karte. Dort erhalten Interessierte die wichtigsten Informationen über Deine Initiative und die Kontaktdaten einer Ansprechperson. Sie können sich über die “Mitmachen”-Box in einen Info-Verteiler eintragen, um Deine Kampagne zu unterstützen. So kannst Du ihnen per E-Mail mitteilen, wann Treffen stattfinden oder ob bald eine Aktion oder Unterschriftensammlung stattfindet, bei der sie mithelfen können. Gerne beraten wir Dich auch zu inhaltlichen Fragen und unterstützen bei der Mobilisierung." />

      <form>
        <FormGroup>
          <Headline level="2" levelStyle="4">
            Deine Kampagne
          </Headline>
        </FormGroup>

        <FormGroup>
          <Input name="title" label="Titel der Kampagne" />
          <Input name="place" label="Ort" />
        </FormGroup>

        <FormGroup>
          <Input name="url" label="Mehr Informationen/ Website" />
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

        <FormGroup>
          <Input name="organisation" label="Organisation (falls zutreffend)" />
        </FormGroup>

        <Paragraph text="Durch meine Eintragung akzeptiere ich die <a href='/datenschutz/'>Datenschutzbestimmungen</a>." />

        <FormGroup type="submit">
          <Button type="submit">Kampagne eintragen</Button>
        </FormGroup>
      </form>
    </Constraint>
  </div>
);

export default withLayout('Mitmachen - Trag dich ein', Page);
