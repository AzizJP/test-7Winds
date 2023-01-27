import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';

import './index.scss';

import App from './components/App/App';

const domContainer = document.getElementById('root');
const root = createRoot(domContainer);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
