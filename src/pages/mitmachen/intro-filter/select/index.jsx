import React from 'react';

import select from '../../../../../static/javascript/super-select';

import './style.scss';

const findSelected = (options, value) =>
  options && options.find(({ value: optionValue }) => optionValue === value);

export default class Select extends React.Component {
  element = React.createRef();

  componentDidMount() {
    if (typeof window !== 'undefined' && this.element && this.element.current) {
      select(this.element.current);
    }
  }

  render() {
    const { options, selected } = this.props;
    const defaultOption = findSelected(options, selected);

    return (
      <div className="super-select js-super-select" ref={this.element}>
        <button
          type="button"
          className="super-select__canvas js-super-select-canvas"
        >
          {defaultOption ? defaultOption.label : options && options[0].label}
        </button>

        <ul className="super-select__list">
          {options &&
            options.map(({ value, label, href }) => (
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
