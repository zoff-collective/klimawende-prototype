const path = require('path');
const slugify = require('slugify');

module.exports = createPage => {
  ['Bayern', 'Sachsen', 'Mecklenburg-Vorpommern'].forEach(state => {
    const url = `/mitmachen/${slugify(state.toLowerCase())}/`;

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
