const path = require('path');

module.exports = createPage => {
  ['Bayern', 'Sachsen'].forEach(state => {
    const url = `/mitmachen/${state.toLowerCase()}/`;

    // eslint-disable-next-line no-console
    console.log('Create page:', url);

    createPage({
      path: url,
      component: path.resolve('src/templates/federal-state/index.jsx'),
      context: {
        state
      }
    });
  });
};