import React from 'react';

import Map from './map';
import Select from './select';

import markers from '../../../../static/json/markers.json';

import '../../../../node_modules/leaflet/dist/leaflet.css';
import './style.scss';

export default ({ intro, resultsTitle, activeState }) => {
  const search = typeof window !== 'undefined' && window.location.search;

  return (
    <>
      <header className="intro-filter">
        <div className="intro-filter__map-container">
          <Map activeState={activeState} markers={markers} />
        </div>

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
                  href: `/mitmachen/${search}`
                },
                {
                  value: 'Bayern',
                  label: 'Bayern',
                  href: `/mitmachen/bayern/${search}`
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
