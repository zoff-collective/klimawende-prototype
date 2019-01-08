const path = require('path');

const projects = require('../data/projects.json');

module.exports = createPage =>
  projects.map(project => {
    const { slug, title } = project;
    const url = `/mitmachen/${slug}/`;

    console.log('Create page: ', url);

    return createPage({
      path: url,
      component: path.resolve('src/templates/projekt/index.jsx'),
      context: {
        title,
        project
      }
    });
  });
