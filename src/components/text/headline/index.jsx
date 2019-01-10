import classnames from 'classnames';
import React from 'react';

import './style.scss';

export default ({
  level = '1',
  levelStyle = '1',
  underlined,
  children,
  ...rest
}) => {
  const Headline = `h${level}`;

  return (
    <div
      className={classnames(`headline`, `headline--level-${levelStyle}`, {
        'headline--is-underlined': underlined
      })}
    >
      <Headline className="headline__headline" {...rest}>
        <span className="headline__headline-content">{children}</span>
      </Headline>
    </div>
  );
};
