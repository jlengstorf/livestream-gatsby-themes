module.exports = {
  __experimentalThemes: ['gatsby-theme-livestream'],
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: 'docs'
      }
    }
  ]
};
