import { GeoJSON, geoJSON, circleMarker, map as leafletMap } from 'leaflet';
import * as topojson from 'topojson';

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
      const layer = new TopoJSON(data, {
        className: 'leaflet-country',
        filter: feature => {
          // if there isn't an active federal state, return everything
          if (activeFederalstate === null) {
            return true;
          }

          const { NAME_1: name } = feature.properties;
          return name === activeFederalstate;
        },
        onEachFeature: (feature, country) => {
          if (!activeFederalstate) {
            country.on('click', () => {
              const { link } = feature.properties;
              redirect(link);
            });
          }
        }
      }).addTo(map);

      // fit the layer into the map shape
      map.fitBounds(layer.getBounds());
    });

const initMarkers = (map, data) => {
  let json;

  try {
    json = JSON.parse(decodeURIComponent(data));
  } catch (err) {
    console.log(err);
  }

  geoJSON(json, {
    pointToLayer: (feature, layer) =>
      circleMarker(layer, {
        className: 'leaflet-marker',
        fill: true
      }),

    onEachFeature: (feature, layer) => {
      layer.on('click', () => {
        const { link } = feature.properties;
        redirect(link);
      });
    }
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
  const { federalstatesEndpoint, markers, activeFederalstate } = el.dataset;
  const map = initMap(el);

  initFederalStates(map, federalstatesEndpoint, activeFederalstate).then(() =>
    initMarkers(map, markers)
  );
};

export default init;
