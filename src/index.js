import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Redux from './redux/redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Redux />
  </StrictMode>
);
