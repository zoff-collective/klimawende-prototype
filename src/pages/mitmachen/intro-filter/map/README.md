# Map

The map needs to be initialized with an empty container:

```html
<div class="map js-map"
     data-federalstates-endpoint=""
     data-active-federalstate=""
     data-markers=""
     data-cities=""
/>
```

Leaflet will then, out of the data passed through the data attributes, attempt
to render a SVG version of the map.

## Data attributes

The DOM element accepts it's data via data attributes:

- `data-federalstates-endpoint`: Points to the static topojson file, which holds
  the federal country shape data.
- `data-active-federalstate`: Contains either nothing, of the current active
  federal state (e.g. "Bayern"). It could also be omitted, if empty.
- `data-markers`: Contains the encoded GeoJSON for the markers. It should only
  contain the markers, which are currently rendered (e.g. for the federal
  country).
- `data-cities`: Contains the encoded GeoJSON for the city markers. It should only
  contain the markers, which are currently rendered (e.g. for the federal
  country).

If a single federal state is displayed, you have to add the additional CSS
class `map--single-state` to the map element.

## Markers

Markers are represented through GeoJSON:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "link": "/mitmachen/projekt/"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.403320312499998,
          52.5897007687178
        ]
      }
    }
  ]
}
```

If the marker properties contain a `link` property, they are clickable.

## Cities

Citites are, the same as Markers, represented through GeoJSON:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "title": "Muenchen"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.403320312499998,
          52.5897007687178
        ]
      }
    }
  ]
}
```

Cities don't need a `link` property. Instead, you can assign a `title` property,
which will then get rendered as a label.
