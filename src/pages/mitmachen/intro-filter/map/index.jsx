import classnames from 'classnames';
import React from 'react';

import './style.scss';

export default class Map extends React.Component {
  map = React.createRef();

  componentDidMount() {
    const { current: map } = this.map;

    if (typeof window !== 'undefined' && map) {
      import('../../../../../static/javascript/map').then(init => {
        init.default(map);
      });
    }
  }

  render() {
    const { activeState = null, markers, cities } = this.props;

    return (
      <div
        className={classnames('map', 'js-map', {
          'map--single-state': !!activeState
        })}
        data-federalstates-endpoint="/json/federal-states.json"
        data-markers={encodeURIComponent(JSON.stringify(markers))}
        data-cities={encodeURIComponent(JSON.stringify(cities))}
        data-active-federalstate={activeState}
        ref={this.map}
      />
    );
  }
}
