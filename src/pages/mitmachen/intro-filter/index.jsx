import React from 'react';

import Headline from '../../../components/text/headline';
import Select from './select';

import './style.scss';

export default ({ resultsTitle }) => (
  <header className="intro-filter">
    <div className="intro-filter__filter">
      <div className="intro-filter__title-container">
        <h1 className="intro-filter__title">
          Zeige
          <Select
            options={[
              { value: 'all', label: 'alle Projekte' },
              { value: 'archived', label: 'abgeschlossene Projekte' },
              { value: 'creation', label: 'Gründungen' },
              { value: 'potential', label: 'potentielle Standorte' },
              { value: 'bestpractice', label: 'Best Practice' }
            ]}
          />
          <br />
          aus
          <Select
            options={[
              { value: 'all', label: 'allen Bereichen' },
              { value: 'energy', label: 'Energie' },
              { value: 'bicycle', label: 'Fahrrad/ Mobilität' }
            ]}
          />
          <br />
          in
          <Select
            options={[
              { value: 'germany', label: 'Deutschland', href: '/mitmachen/' },
              { value: 'bavaria', label: 'Bayern', href: '/mitmachen/bayern/' }
            ]}
          />
        </h1>
      </div>
    </div>

    <div className="intro-filter__results-title-container">
      <Headline level="2" levelStyle="3">
        {resultsTitle}
      </Headline>
    </div>
  </header>
);
