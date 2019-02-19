# Map

The DOM element accepts it's data via data attributes:

- `data-federalstates-endpoint`: Points to the static topojson file, which holds
  the federal country shape data.
- `data-active-federalstate`: Contains either nothing, of the current active
  federal state (e.g. "Bayern"). It could also be omitted, if empty.
- `data-markers`: Contains the encoded GeoJSON for the markers. It should only
  contain the markers, which are currently rendered (e.g. for the federal
  country).

If a single federal state is displayed, you have to add the additional CSS
class `map--single-state` to the map element.
