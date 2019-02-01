import Helmet from 'react-helmet';
import React from 'react';

import BlockContent from '../../components/block-content';
import Button from '../../components/form/button';
import Checkbox from '../../components/form/checkbox';
import Constraint from '../../components/constraint';
import FormGroup from '../../components/form/group';
import Headline from '../../components/text/headline';
import Input from '../../components/form/input';
import IntroProject from './intro-project';
import Participate from '../../components/participate';
import Person from '../../components/person';
import Textarea from '../../components/form/textarea';
import withLayout from '../../components/with-layout';

import './style.scss';

export default withLayout(
  'Projekt',
  ({
    pageContext: {
      project: {
        title,
        blocks,
        image,
        summary,
        location,
        type,
        category,
        state
      },

      contactPerson
    }
  }) => (
    <article className="project">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <IntroProject
        title={title}
        summary={summary}
        image={image}
        type={type}
        state={state}
        location={location}
        category={category}
      />

      <div className="project__body">
        <Constraint width="wide" className="project__body-constraint">
          <div className="project__body-content-container">
            {blocks && <BlockContent blocks={blocks} />}
          </div>

          <div className="project__body-participate-container">
            {state !== 'Abgeschlossen' && (
              <Button
                href="#participate"
                fullWidth
                className="project__participate-fixed-button"
              >
                Mitmachen!
              </Button>
            )}

            {state !== 'Abgeschlossen' ? (
              <Participate
                id="participate"
                title="Und jetzt du!"
                intro="Willst Du die Kampagne „Radentscheid Rostock“ unterstützen?"
              >
                <form>
                  <FormGroup>
                    <Input label="Email" name="email" />
                  </FormGroup>

                  <FormGroup>
                    <Checkbox
                      label="Ja, ich möchte außerdem regelmäßig vom Umweltinstitut über Kampagnen zum Klimaschutz und anderen Umweltthemen informiert werden."
                      name="email-confirm"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Button fullWidth theme="yellow">
                      Mach mit!
                    </Button>
                  </FormGroup>
                </form>
              </Participate>
            ) : (
              <Participate
                id="participate"
                title="Wir beraten dich"
                intro="Um deine eigene Kampagne zu holen, kannst du dir von uns jederzeit kompetente Beratung einholen."
              >
                <form>
                  <FormGroup>
                    <Button fullWidth theme="yellow">
                      Beratung anfordern
                    </Button>
                  </FormGroup>
                </form>
              </Participate>
            )}
          </div>
        </Constraint>
      </div>

      <div className="project__contact">
        <h2 className="project__contact-title">Ansprechperson</h2>

        <Constraint>
          <div className="project__contact-person-container">
            <Person {...contactPerson} />
          </div>

          {!contactPerson.email && (
            <>
              <Headline level="3" levelStyle="3">
                Ansprechperson kontaktieren
              </Headline>

              <form>
                <FormGroup>
                  <Input label="Deine Email-Adresse" name="email" />
                </FormGroup>

                <FormGroup>
                  <Textarea label="Deine Nachricht" name="text" rows="8" />
                </FormGroup>

                <FormGroup>
                  <Button>Nachricht senden!</Button>
                </FormGroup>
              </form>
            </>
          )}
        </Constraint>
      </div>
    </article>
  )
);
