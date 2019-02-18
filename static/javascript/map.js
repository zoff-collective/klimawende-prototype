import Leaflet from 'leaflet';
import * as topojson from 'topojson';

class TopoJSON extends Leaflet.GeoJSON {
  addData(data) {
    if (data.type === 'Topology') {
      Object.keys(data.objects).forEach(key => {
        const geojson = topojson.feature(data, data.objects[key]);
        Leaflet.GeoJSON.prototype.addData.call(this, geojson);
      });
    } else {
      Leaflet.GeoJSON.prototype.addData.call(this, data);
    }

    return this;
  }
}

const initFederalStates = (map, endpoint) => {
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      new TopoJSON(data).addTo(map);
    });
};

const initMarkers = (map, endpoint) => {
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      Leaflet.geoJSON(data, {
        pointToLayer: (feature, latlng) =>
          Leaflet.circleMarker(latlng, {
            className: 'leaflet-marker',
            fill: true
          })
      }).addTo(map);
    });
};

const initMap = el => {
  const map = Leaflet.map(el, {
    attributionControl: false,
    zoomControl: false
  });

  // set view to the center of germany
  map.setView([51.133481, 10.018343], 6);

  map.scrollWheelZoom.disable();

  return map;
};

const init = el => {
  const { shapesEndpoint, markersEndpoint } = el.dataset;
  const map = initMap(el);

  initFederalStates(map, shapesEndpoint);
  initMarkers(map, markersEndpoint);
};

export default init;
