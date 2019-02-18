import classnames from 'classnames';
import Link from 'gatsby-link';
import React from 'react';

import navigation from '../../../static/javascript/navigation';

import BarsIcon from '../../../static/icons/bars.svg';
import TimesIcon from '../../../static/icons/times.svg';

import './style.scss';

export default class Navigation extends React.Component {
  element = React.createRef();

  componentDidMount() {
    const { current: element } = this.element;

    navigation(element);
  }

  render() {
    const { items } = this.props;

    return (
      <nav className="navigation" ref={this.element}>
        <Link to="/" className="navigation__logo">
          Klimawende von unten
        </Link>

        {/* eslint-disable */}
        <label htmlFor="navigation-toggle" className="navigation__toggle js-toggle">
          Menü
          <BarsIcon className="navigation__toggle-icon" />
          <TimesIcon className="navigation__close-icon" />
        </label>
        {/* eslint-enable */}

        <input
          type="checkbox"
          name="navigation-toggle"
          id="navigation-toggle"
          className="navigation__toggle-checkbox"
        />

        <ul className="navigation__list">
          {items.map(({ link, title, name, sub }) => (
            <li
              key={title}
              className={classnames(
                'navigation__list-item',
                `navigation__list-item--theme-${name}`,
                { 'navigation__list-item--has-sub': !!sub }
              )}
            >
              <Link
                to={link}
                className="navigation__item"
                activeClassName="is-active"
                getProps={({ isPartiallyCurrent }) =>
                  isPartiallyCurrent
                    ? {
                        className: `navigation__item navigation__item--theme-${name} is-active`
                      }
                    : null
                }
              >
                <span className="navigation__item-label">{title}</span>
              </Link>

              {sub && (
                <div className="navigation__sub">
                  <ul className="navigation__sub-list">
                    {sub.items &&
                      sub.items.map(({ link: subLink, title: subTitle }) => (
                        <li key={subTitle}>
                          <Link to={subLink} className="navigation__sub-item">
                            {subTitle}
                          </Link>
                        </li>
                      ))}
                  </ul>

                  {sub.teaser && (
                    <Link
                      to={sub.teaser.link}
                      className="navigation__sub-teaser"
                    >
                      <div className="navigation__sub-teaser-image-container">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img {...sub.teaser.image} />
                      </div>

                      <div className="navigation__sub-teaser-content-container">
                        <span className="navigation__sub-teaser-content-title">
                          {sub.teaser.title}
                        </span>
                        <p className="navigation__sub-teaser-content-intro">
                          {sub.teaser.text}
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
