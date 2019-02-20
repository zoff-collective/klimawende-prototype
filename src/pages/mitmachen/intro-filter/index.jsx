import React from 'react';

import Map from './map';
import Select from './select';

import cities from '../../../../static/json/cities.json';
import markers from '../../../../static/json/markers.json';

import '../../../../node_modules/leaflet/dist/leaflet.css';
import './style.scss';

export default ({ intro, resultsTitle, activeState }) => {
  const search = typeof window !== 'undefined' && window.location.search;
  const activeStateSlug = activeState ? activeState.toLowerCase() : '';

  return (
    <>
      <header className="intro-filter">
        <div className="intro-filter__map-container">
          <Map activeState={activeState} markers={markers} cities={cities} />
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
                  href: `/mitmachen/${search}`
                },

                {
                  value: 'Bayern',
                  label: 'Bayern',
                  href: `/mitmachen/bayern/${search}`
                },

                {
                  value: 'Mecklenburg-Vorpommern',
                  label: 'Mecklenburg-Vorpommern',
                  href: `/mitmachen/mecklenburg-vorpommern/${search}`
                },

                {
                  value: 'Sachsen',
                  label: 'Sachsen',
                  href: `/mitmachen/sachsen/${search}`
                }
              ]}
              selected={activeState}
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
