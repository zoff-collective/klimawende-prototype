import Helmet from 'react-helmet';
import React from 'react';

import BlockContent from '../../components/block-content';
import Button from '../../components/form/button';
import Constraint from '../../components/constraint';
import FormGroup from '../../components/form/group';
import Headline from '../../components/text/headline';
import Input from '../../components/form/input';
import IntroProject from './intro-project';
import Participate from '../../components/participate';
import withLayout from '../../components/with-layout';

import './style.scss';

export default withLayout(
  'Projekt',
  ({
    pageContext: {
      project: { title, blocks, image, summary, location, type, category }
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
        location={location}
        category={category}
      />

      <div className="project__body">
        <Constraint width="wide" className="project__body-constraint">
          <div className="project__body-content-container">
            <BlockContent blocks={blocks} />
          </div>

          <div className="project__body-participate-container">
            <Participate
              title="Und jetzt du!"
              intro="Willst Du die Kampagne „Radentscheid Rostock“ unterstützen?"
            >
              <form>
                <FormGroup>
                  <Input label="Email" name="email" />
                </FormGroup>

                <FormGroup>
                  <Button fullWidth theme="yellow">
                    Mitmachen!
                  </Button>
                </FormGroup>
              </form>
            </Participate>
          </div>
        </Constraint>
      </div>

      <div className="project__contact">
        <h2 className="project__contact-title">Ansprechperson</h2>

        <Constraint>
          <Headline level="3" levelStyle="3">
            Ansprechperson kontaktieren
          </Headline>

          <form>
            <FormGroup>
              <Input label="Email" name="email" />
            </FormGroup>

            <FormGroup>
              <Input label="Text" name="text" />
            </FormGroup>

            <FormGroup>
              <Button>Nachricht senden!</Button>
            </FormGroup>
          </form>
        </Constraint>
      </div>
    </article>
  )
);
