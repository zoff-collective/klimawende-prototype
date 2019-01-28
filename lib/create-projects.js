const path = require('path');

const findPersonByName = (name, persons) =>
  persons.find(person => person.node.name === name);

module.exports = (createPage, graphql) => {
  const fetchProjects = () =>
    graphql(`
      query {
        projects: allProjectsJson {
          edges {
            node {
              id
              slug
              title
              location
              type
              date
              category
              summary
              state
              image {
                src
                alt
              }
              site {
                url
                label
              }
              contactPerson {
                email
                name
              }
              blocks {
                type
                content
                goals
                author
              }
            }
          }
        }
      }
    `);

  const fetchPersons = () =>
    graphql(`
      query {
        persons: allPersonsJson {
          edges {
            node {
              name
              intro
              email
              phone
              image
            }
          }
        }
      }
    `);

  return Promise.all([fetchProjects(), fetchPersons()]).then(
    ([
      {
        data: {
          projects: { edges: projects }
        }
      },
      {
        data: {
          persons: { edges: persons }
        }
      }
    ]) => {
      projects.forEach(({ node: project }) => {
        const {
          slug,
          title,
          contactPerson: { name, email }
        } = project;
        const url = `/mitmachen/${slug}/`;

        // eslint-disable-next-line no-console
        console.log('Create page: ', url);

        // eslint-disable-next-line no-param-reassign
        let newContactPerson = findPersonByName(name, persons).node;

        if (email === false) {
          newContactPerson = {
            ...newContactPerson,
            email: ''
          };
        }

        createPage({
          path: url,
          component: path.resolve('src/templates/projekt/index.jsx'),
          context: {
            title,
            project,
            contactPerson: newContactPerson
          }
        });
      });
    }
  );
};
