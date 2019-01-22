import Helmet from 'react-helmet';
import React from 'react';

import BlockContent from '../../components/block-content';
import Button from '../../components/form/button';
import Constraint from '../../components/constraint';
import FormGroup from '../../components/form/group';
import Input from '../../components/form/input';
import Intro from '../../components/intro';
import Participate from '../../components/participate';
import withLayout from '../../components/with-layout';

import './style.scss';

export default withLayout(
  'Projekt',
  ({
    pageContext: {
      project: { title, blocks, date, location }
    }
  }) => (
    <article className="project">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Intro title={title}>
        <p className="project__meta-container">
          <span className="project__location">{location}</span>
          <span className="project__date">, {date}</span>
        </p>
      </Intro>

      <div className="project__body">
        <Constraint className="project__body-constraint">
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

      <Constraint>
        <form>
          <FormGroup>
            <Input label="Email" name="email" />
          </FormGroup>

          <FormGroup>
            <Input label="Text" name="text" />
          </FormGroup>

          <FormGroup>
            <Button fullWidth theme="yellow">
              Nachricht senden!
            </Button>
          </FormGroup>
        </form>
      </Constraint>
    </article>
  )
);
