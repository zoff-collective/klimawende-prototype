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

const initFederalStates = (el, endpoint) => {
  const map = Leaflet.map(el, {
    attributionControl: false,
    zoomControl: false
  });

  // set view to the center of germany
  map.setView([51.133481, 10.018343], 6);

  // fetch data and render data layer
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      new TopoJSON(data).addTo(map);
    });
};

const init = el => {
  const { shapesEndpoint } = el.dataset;

  initFederalStates(el, shapesEndpoint);
};

export default init;
