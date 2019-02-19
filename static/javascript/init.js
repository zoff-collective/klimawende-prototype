import domready from 'domready';

import initMap from './map';
import initNavigation from './navigation';
import initSelect from './super-select';

domready(() => {
  const navigation = document.querySelector('.js-navigation');

  if (navigation) {
    initNavigation(navigation);
  }

  const selects = document.querySelectorAll('.js-super-select');

  if (selects && selects.length > 0) {
    Array.from(selects).forEach(initSelect);
  }

  const map = document.querySelector('.js-map');

  if (map) {
    initMap(map);
  }
});
