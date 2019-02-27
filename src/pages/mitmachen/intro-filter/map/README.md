# Map

The map needs to be initialized with an empty container:

```html
<div class="map js-map"
     data-federalstate-filter-parameter=""
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

- `data-federalstate-filter-parameter`: Can contain a string, which is appended
  the the `link` peroperty of the layer. E.g. `"&param=true"` would lead to
  `?federalstate=[id]&param=true`.
- `data-federalstates-endpoint`: Points to the static topojson file, which holds
  the federal country shape data.
- `data-active-federalstate`: Contains either nothing, or the current active
  federal state id (e.g. "15"). The property could also be omitted, if empty.
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
        "title": "Title of the project (will become the tooltip)",
        "link": "/mitmachen/[projectId]/"
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

If the marker properties contain a `link` property, they are clickable. If the
marker properties contain a `title` property, a tooltip is rendered on mouseover.

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
