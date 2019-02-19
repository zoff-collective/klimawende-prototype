import { GeoJSON, geoJSON, circleMarker, map as leafletMap } from 'leaflet';
import * as topojson from 'topojson';

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

const initFederalStates = (map, endpoint) =>
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      new TopoJSON(data, {
        className: 'leaflet-country',
        onEachFeature: (feature, country) => {
          country.on('click', () => {
            const { link } = feature.properties;

            if (!link) {
              throw new Error(
                'Federal State: The geoJSON feature is missing a link property'
              );
            }

            window.location.href = link;
          });
        }
      }).addTo(map);
    });

const initMarkers = (map, endpoint) => {
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      geoJSON(data, {
        pointToLayer: (feature, layer) =>
          circleMarker(layer, {
            className: 'leaflet-marker',
            fill: true
          }),

        onEachFeature: (feature, layer) => {
          layer.on('click', () => {
            const { link } = feature.properties;

            if (!link) {
              throw new Error(
                'Marker: The geoJSON feature (Point) is missing a link property'
              );
            }

            window.location.href = link;
          });
        }
      }).addTo(map);
    });
};

const initMap = el => {
  const map = leafletMap(el, {
    attributionControl: false,
    zoomControl: false
  });

  // set view to the center of germany
  map.setView([51.133481, 10.018343], 6);

  map.scrollWheelZoom.disable();
  map.doubleClickZoom.disable();

  return map;
};

const init = el => {
  const { federalstatesEndpoint, markersEndpoint } = el.dataset;
  const map = initMap(el);

  initFederalStates(map, federalstatesEndpoint).then(() =>
    initMarkers(map, markersEndpoint)
  );
};

export default init;
