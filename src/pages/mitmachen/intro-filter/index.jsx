import React from 'react';

import Map from './map';
import Select from './select';

import cities from '../../../../static/json/cities.json';
import markers from '../../../../static/json/markers.json';

import '../../../../node_modules/leaflet/dist/leaflet.css';
import './style.scss';

export default ({ intro, resultsTitle }) => {
  const search =
    typeof window !== 'undefined' &&
    window.location.search &&
    window.location.search.split('?');
  const params =
    search &&
    search[1].split('&').reduce((acc, param) => {
      const [key, value] = param.split('=');

      acc[key] = value;

      return acc;
    }, {});

  const activeStateId = params.bundesland
    ? parseInt(params.bundesland, 10)
    : null;

  return (
    <>
      <header className="intro-filter">
        <div className="intro-filter__map-container">
          <Map activeState={activeStateId} markers={markers} cities={cities} />
        </div>

        <div className="intro-filter__title-container">
          {intro && <h1 className="intro-filter__intro">{intro}</h1>}

          <div className="intro-filter__title">
            <div className="intro-filter__title-row">
              <Select
                options={[
                  {
                    value: 'all',
                    label: 'Alle Kampagnen',
                    href: `/mitmachen/?status=all`
                  },

                  {
                    value: 'archived',
                    label: 'Abgeschlossene Kampagnen',
                    href: `/mitmachen/?status=archived`
                  },

                  {
                    value: 'active',
                    label: 'Laufende Kampagnen',
                    href: `/mitmachen/?status=active`
                  },

                  {
                    value: 'creation',
                    label: 'Gründungen',
                    href: `/mitmachen/?status=creation`
                  },

                  {
                    value: 'potential',
                    label: 'Potenzielle Standorte',
                    href: `/mitmachen/?status=potential`
                  },

                  {
                    value: 'success',
                    label: 'Erfolgsbeispiele',
                    href: `/mitmachen/?status=success`
                  }
                ]}
              />
            </div>
            <div className="intro-filter__title-row">
              <span className="intro-filter__title-row-label">aus</span>
              <Select
                options={[
                  {
                    value: 'all',
                    label: 'allen Bereichen',
                    href: `/mitmachen/?topic=all`
                  },

                  {
                    value: 'coal',
                    label: 'Kohleausstieg',
                    href: `/mitmachen/?topic=energy`
                  },

                  {
                    value: 'energy',
                    label: 'Energiewende',
                    href: `/mitmachen/?topic=energy`
                  },

                  {
                    value: 'mobility',
                    label: 'Verkehrswende',
                    href: `/mitmachen/?topic=mobility`
                  }
                ]}
              />
            </div>
            <div className="intro-filter__title-row">
              <span className="intro-filter__title-row-label">in</span>
              <Select
                options={[
                  {
                    value: null,
                    label: 'Deutschland',
                    href: `/mitmachen/`
                  },

                  {
                    value: 15,
                    label: 'Bayern',
                    href: `/mitmachen/?bundesland=15`
                  },

                  {
                    value: 22,
                    label: 'Mecklenburg-Vorpommern',
                    href: `/mitmachen/?bundesland=22`
                  },

                  {
                    value: 24,
                    label: 'Sachsen',
                    href: `/mitmachen/?bundesland=24`
                  }
                ]}
                selected={activeStateId}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="intro-filter__results-title-container">
        {resultsTitle}
      </div>
    </>
  );
};
