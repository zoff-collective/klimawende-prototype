import React from 'react';

import Headline from '../../../components/text/headline';
import Select from './select';

import './style.scss';

export default class Intro extends React.Component {
  map = React.createRef();

  componentDidMount() {
    const { current: map } = this.map;

    if (typeof window !== 'undefined' && map) {
      import('../../../../static/javascript/map').then(init => {
        init.default(map);
      });
    }
  }

  render() {
    const { intro, resultsTitle, activeState } = this.props;

    return (
      <header className="intro-filter">
        <div className="intro-filter__filter">
          <div
            className="intro-filter__map js-map"
            data-federalstates-endpoint="/json/federal-states.json"
            data-markers-endpoint="/json/markers.json"
            ref={this.map}
          />

          <div className="intro-filter__title-container">
            {intro && <h1 className="intro-filter__intro">{intro}</h1>}

            <div className="intro-filter__title">
              <Select
                options={[
                  {
                    value: 'all',
                    label: 'Alle Kampagnen',
                    href: `/mitmachen/${activeState &&
                      `${activeState.toLowerCase()}/`}?status=all`
                  },
                  {
                    value: 'archived',
                    label: 'Abgeschlossene Kampagnen',
                    href: `/mitmachen/${activeState &&
                      `${activeState.toLowerCase()}/`}?status=archived`
                  },
                  {
                    value: 'creation',
                    label: 'Gründungen',
                    href: `/mitmachen/${activeState &&
                      `${activeState.toLowerCase()}/`}?status=creation`
                  },
                  {
                    value: 'potential',
                    label: 'Potentielle Standorte',
                    href: `/mitmachen/${activeState &&
                      `${activeState.toLowerCase()}/`}?status=potential`
                  },
                  {
                    value: 'bestpractice',
                    label: 'Best Practice Beispiele',
                    href: `/mitmachen/${activeState &&
                      `${activeState.toLowerCase()}/`}?status=bestpractive`
                  }
                ]}
              />
              <br />
              aus
              <Select
                options={[
                  {
                    value: 'all',
                    label: 'allen Bereichen',
                    href: `/mitmachen/${activeState &&
                      `${activeState.toLowerCase()}/`}?topic=all`
                  },
                  {
                    value: 'energy',
                    label: 'Energie',
                    href: `/mitmachen/${activeState &&
                      `${activeState.toLowerCase()}/`}?topic=energy`
                  },
                  {
                    value: 'bicycle',
                    label: 'Fahrrad/ Mobilität',
                    href: `/mitmachen/${activeState &&
                      `${activeState.toLowerCase()}/`}?topic=mobility`
                  }
                ]}
              />
              <br />
              in
              <Select
                options={[
                  {
                    value: 'Deutschland',
                    label: 'Deutschland',
                    href: '/mitmachen/'
                  },
                  {
                    value: 'Bayern',
                    label: 'Bayern',
                    href: '/mitmachen/bayern/'
                  }
                ]}
                selected={activeState}
              />
            </div>
          </div>
        </div>

        <div className="intro-filter__results-title-container">
          <Headline level="2" levelStyle="3">
            {resultsTitle}
          </Headline>
        </div>
      </header>
    );
  }
}
