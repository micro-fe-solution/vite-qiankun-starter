import 'regenerator-runtime/runtime.js';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import '@sensoro-design/styles/dist/styles.min.css';
import './global.less';

createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
