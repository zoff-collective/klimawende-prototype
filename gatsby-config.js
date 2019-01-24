module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/'
      }
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/icons/
        }
      }
    }
  ]
};
