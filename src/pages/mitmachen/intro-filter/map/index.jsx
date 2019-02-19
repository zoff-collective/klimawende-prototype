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
    const { activeState } = this.props;

    return (
      <div
        className={classnames('map', 'js-map', {
          'map--single-state': !!activeState
        })}
        data-federalstates-endpoint="/json/federal-states.json"
        data-markers-endpoint="/json/markers.json"
        data-active-federalstate={activeState}
        ref={this.map}
      />
    );
  }
}
