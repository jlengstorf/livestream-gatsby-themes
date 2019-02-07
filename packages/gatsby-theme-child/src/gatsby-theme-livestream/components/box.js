import React from 'react';
import { colors } from 'gatsby-theme-livestream';

export default ({ children }) => (
  <div
    style={{
      padding: '2rem',
      background: colors.primary
    }}
  >
    <h2 style={{ margin: 0 }}>Hey! This is important!</h2>
    {children}
  </div>
);
