import domready from 'domready';

import initMap from './map';
import initNavigation from './navigation';
import initSelect from './super-select';

domready(() => {
  const navigation = document.querySelector('.js-navigation');
  initNavigation(navigation);

  const selects = document.querySelectorAll('.js-super-select');
  Array.from(selects).forEach(initSelect);

  const map = document.querySelector('.js-map');
  initMap(map);
});
