import React from 'react';

import BlockContent from '../block-content';
import Content from '../content';
import Headline from '../text/headline';

import './style.scss';

export default ({ title, blocks }) => (
  <Content className="page">
    <Headline level="1" levelStyle="2">
      {title}
    </Headline>
    <BlockContent blocks={blocks} />
  </Content>
);
