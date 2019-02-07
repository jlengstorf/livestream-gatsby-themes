import React from 'react';
import { colors } from 'gatsby-theme-livestream';

const systemFont =
  ' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export default props => (
  <h1
    style={{
      color: colors.primary,
      fontFamily: systemFont,
      fontSize: '2rem'
    }}
    {...props}
  />
);
