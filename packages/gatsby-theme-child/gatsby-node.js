exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
        edges {
          node {
            name
            childMdx {
              code {
                body
              }
            }
          }
        }
      }
    }
  `);

  console.log(Object.keys(result));
  const pages = result.data.allFile.edges.map(({ node }) => node);

  pages.forEach(page => {
    actions.createPage({
      path: `/${page.name}`,
      component: require.resolve('./src/templates/docs.js'),
      context: {
        body: page.childMdx.code.body
      }
    });
  });
};
