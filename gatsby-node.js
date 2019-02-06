const createProjects = require('./lib/create-projects');
const createStates = require('./lib/create-federal-states');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([
    createProjects(createPage, graphql),
    createStates(createPage)
  ]);
};
