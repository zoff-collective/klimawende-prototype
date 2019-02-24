const createProjects = require('./lib/create-projects');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([createProjects(createPage, graphql)]);
};
