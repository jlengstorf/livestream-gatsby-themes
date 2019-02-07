import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

export default ({ pageContext }) => (
  <MDXRenderer>{pageContext.body}</MDXRenderer>
);
