import React from 'react';

import Map from './map';
import Select from './select';

import cities from '../../../../static/json/cities.json';
import markers from '../../../../static/json/markers.json';

import '../../../../node_modules/leaflet/dist/leaflet.css';
import './style.scss';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

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

  const activeStateSlug = params.bundesland
    ? params.bundesland.toLowerCase()
    : '';

  return (
    <>
      <header className="intro-filter">
        <div className="intro-filter__map-container">
          <Map
            activeState={params.bundesland && capitalize(params.bundesland)}
            markers={markers}
            cities={cities}
          />
        </div>

        <div className="intro-filter__title-container">
          {intro && <h1 className="intro-filter__intro">{intro}</h1>}

          <div className="intro-filter__title">
            <Select
              options={[
                {
                  value: 'all',
                  label: 'Alle Kampagnen',
                  href: `/mitmachen/${activeStateSlug}/?status=all`
                },

                {
                  value: 'archived',
                  label: 'Abgeschlossene Kampagnen',
                  href: `/mitmachen/${activeStateSlug}/?status=archived`
                },

                {
                  value: 'active',
                  label: 'Laufende Kampagnen',
                  href: `/mitmachen/${activeStateSlug}/?status=active`
                },

                {
                  value: 'creation',
                  label: 'Gründungen',
                  href: `/mitmachen/${activeStateSlug}/?status=creation`
                },

                {
                  value: 'potential',
                  label: 'Potenzielle Standorte',
                  href: `/mitmachen/${activeStateSlug}/?status=potential`
                },

                {
                  value: 'success',
                  label: 'Erfolgsbeispiele',
                  href: `/mitmachen/${activeStateSlug}/?status=success`
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
                  href: `/mitmachen/${activeStateSlug}/?topic=all`
                },

                {
                  value: 'coal',
                  label: 'Kohleausstieg',
                  href: `/mitmachen/${activeStateSlug}/?topic=energy`
                },

                {
                  value: 'energy',
                  label: 'Energiewende',
                  href: `/mitmachen/${activeStateSlug}/?topic=energy`
                },

                {
                  value: 'mobility',
                  label: 'Verkehrswende',
                  href: `/mitmachen/${activeStateSlug}/?topic=mobility`
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
                  href: `/mitmachen/`
                },

                {
                  value: 'bayern',
                  label: 'Bayern',
                  href: `/mitmachen/?bundesland=bayern`
                },

                {
                  value: 'mecklenburg-vorpommern',
                  label: 'Mecklenburg-Vorpommern',
                  href: `/mitmachen/?bundesland=mecklenburg-vorpommern`
                },

                {
                  value: 'sachsen',
                  label: 'Sachsen',
                  href: `/mitmachen/?bundesland=sachsen`
                }
              ]}
              selected={params && params.bundesland}
            />
          </div>
        </div>
      </header>

      <div className="intro-filter__results-title-container">
        {resultsTitle}
      </div>
    </>
  );
};
