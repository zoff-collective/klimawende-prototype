import React from 'react';

import select from './frontend';

import './style.scss';

export default class Select extends React.Component {
  element = React.createRef();

  componentDidMount() {
    select(this.element.current);
  }

  render() {
    const { options } = this.props;

    return (
      <div className="super-select js-super-select" ref={this.element}>
        <button
          type="button"
          className="super-select__canvas js-super-select-canvas"
        >
          {options[0].label}
        </button>

        <ul className="super-select__list">
          {options.map(({ value, label, href }) => (
            <li data-value={value}>
              <a href={href} className="super-select__list-item">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
