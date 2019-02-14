import React from 'react';

import Intro from '../../../../components/intro';
import withLayout from '../../../../components/with-layout';

export default withLayout('Broschüre', () => (
  <div className="broschuere">
    <Intro
      title="Danke Angela!"
      intro="Die Bestellung wird die nächste Tage geschickt werden. Bis dahin kannst du die Digital Bröschure runterladen."
    />
  </div>
));
