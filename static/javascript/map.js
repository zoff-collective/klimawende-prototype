import { GeoJSON, geoJSON, circleMarker, map as leafletMap } from 'leaflet';
import * as topojson from 'topojson';
import throttle from 'lodash.throttle';

const getScreenWidth = () => {
  if (!window) {
    return null;
  }

  const docElement = document.documentElement;
  const body = document.getElementsByTagName('body')[0];

  return window.innerWidth || docElement.clientWidth || body.clientWidth;
};

const redirect = to => {
  if (!to) {
    throw new Error('Missing link');
  }

  window.location.href = to;
};

class TopoJSON extends GeoJSON {
  addData(data) {
    if (data.type === 'Topology') {
      Object.keys(data.objects).forEach(key => {
        const geojson = topojson.feature(data, data.objects[key]);
        GeoJSON.prototype.addData.call(this, geojson);
      });
    } else {
      GeoJSON.prototype.addData.call(this, data);
    }

    return this;
  }
}

const initFederalStates = (map, endpoint, activeFederalstate = null) =>
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      const filterFederalStates = feature => {
        // if there isn't an active federal state, return everything
        if (activeFederalstate === null) {
          return true;
        }

        const { NAME_1: name } = feature.properties;
        return name === activeFederalstate;
      };

      const addBindings = (feature, country) => {
        if (!activeFederalstate) {
          country.on('click', () => {
            const { link } = feature.properties;
            redirect(link);
          });
        }
      };

      const findLayerinBounds = layer => {
        map.fitBounds(layer.getBounds());
      };

      const layer = new TopoJSON(data, {
        className: 'leaflet-country',
        filter: filterFederalStates,
        onEachFeature: addBindings
      }).addTo(map);

      findLayerinBounds(layer);

      window.addEventListener(
        'resize',
        throttle(() => {
          findLayerinBounds(layer);
        }, 150)
      );
    });

const initMarkers = (map, data) => {
  let json;

  try {
    json = JSON.parse(decodeURIComponent(data));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  const renderMarker = (feature, layer) => {
    let radius = 5;

    if (getScreenWidth() > 768) {
      radius = 10;
    }

    return circleMarker(layer, {
      className: 'leaflet-marker',
      fill: true,
      radius
    });
  };

  const addBindings = (feature, layer) => {
    layer.on('click', () => {
      const { link } = feature.properties;
      redirect(link);
    });
  };

  geoJSON(json, {
    pointToLayer: renderMarker,
    onEachFeature: addBindings
  }).addTo(map);
};

const initCities = (map, data) => {
  let json;

  try {
    json = JSON.parse(decodeURIComponent(data));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  const renderMarker = (feature, layer) =>
    circleMarker(layer, {
      className: 'leaflet-city-marker',
      radius: 5,
      fill: true
    }).bindTooltip(feature.properties.title, {
      permanent: true,
      direction: 'right'
    });

  geoJSON(json, {
    pointToLayer: renderMarker
  }).addTo(map);
};

const initMap = el => {
  const map = leafletMap(el, {
    attributionControl: false,
    zoomControl: false
  });

  map.scrollWheelZoom.disable();
  map.doubleClickZoom.disable();

  return map;
};

const init = el => {
  const {
    federalstatesEndpoint,
    markers,
    cities,
    activeFederalstate
  } = el.dataset;
  const map = initMap(el);

  initFederalStates(map, federalstatesEndpoint, activeFederalstate).then(() => {
    if (activeFederalstate) {
      initCities(map, cities);
    }

    initMarkers(map, markers);
  });
};

export default init;
