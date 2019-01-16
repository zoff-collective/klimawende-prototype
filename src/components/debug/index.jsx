import ClipboardJS from 'clipboard';
import pretty from 'pretty';
import React from 'react';

import './_style.css';

export default class Debug extends React.Component {
  button = React.createRef();

  copyHTML = () => {
    const body = document.querySelector('#___gatsby');

    // eslint-disable-next-line no-new
    new ClipboardJS(this.button.current, {
      text() {
        return pretty(body.children[0].innerHTML);
      }
    });

    this.button.current.dispatchEvent(new Event('click'));
  };

  render() {
    return (
      <button
        ref={this.button}
        type="button"
        className="debug"
        onClick={event => {
          event.preventDefault();
          this.copyHTML();
        }}
      >
        Copy Markup into clipboard
      </button>
    );
  }
}
