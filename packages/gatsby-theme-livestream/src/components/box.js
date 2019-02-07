import React from 'react';
import colors from '../tokens/colors';

export default ({ children }) => (
  <div
    style={{
      padding: '1rem',
      backgroundColor: colors.primary
    }}
  >
    {children}
  </div>
);
