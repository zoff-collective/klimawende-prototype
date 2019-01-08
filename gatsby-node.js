const createProjects = require('./lib/create-projects');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  return Promise.all([createProjects(createPage)]);
};
