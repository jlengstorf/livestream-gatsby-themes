import React from 'react';

const systemFont =
  ' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export default props => (
  <h1
    style={{
      fontFamily: systemFont,
      fontSize: '2rem'
    }}
    {...props}
  />
);
