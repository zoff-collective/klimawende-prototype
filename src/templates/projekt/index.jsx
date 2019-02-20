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
      project: { title, blocks, image, summary, place, type, category, state },

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
        place={place}
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
                title="Und jetzt DU!"
                intro="Trag Dich hier ein, um von den Aktiven in {ORT} auf dem Laufenden gehalten zu werden. Sie informieren Dich über wichtige Termine und wie Du sie unterstützen kannst."
              >
                <form>
                  <FormGroup>
                    <Input label="Deine E-Mail" name="email" />
                  </FormGroup>

                  <FormGroup>
                    <Checkbox
                      label="Ja, ich möchte außerdem vom Umweltinstitut regelmäßig über Kampagnen zum Klimaschutz und andere Umweltthemen informiert werden."
                      name="email-confirm"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Button fullWidth theme="yellow">
                      Jetzt mitmachen
                    </Button>
                  </FormGroup>
                </form>
              </Participate>
            ) : (
              <Participate
                id="participate"
                title="Wir beraten DICH"
                intro="Du hast eine erste Idee für eine Kampagne, aber viele offenen Fragen?"
              >
                <form>
                  <FormGroup>
                    <Button href="/beratung/" fullWidth theme="yellow">
                      Zur Beratung
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
