const path = require('path');

module.exports = createPage => {
  ['Bayern', 'Sachsen', 'Deutschland'].forEach(state => {
    const url = `/mitmachen/${state.toLowerCase()}/`;

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
