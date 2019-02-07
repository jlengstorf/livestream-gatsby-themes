import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import H1 from './h1';

const systemFont =
  ' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

const components = {
  h1: H1,
  p: props => (
    <p
      style={{
        fontFamily: systemFont,
        fontSize: '22px'
      }}
      {...props}
    />
  )
};

export default ({ children }) => (
  <MDXProvider components={components}>
    <section
      style={{
        display: 'block',
        maxWidth: '90%',
        width: '650px',
        margin: '2rem auto'
      }}
    >
      {children}
    </section>
  </MDXProvider>
);
