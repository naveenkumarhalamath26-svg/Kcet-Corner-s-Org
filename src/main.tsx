import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker for full offline support in production
if ('serviceWorker' in navigator && !import.meta.env.DEV) {
  try {
    registerSW({
      immediate: true,
      onNeedRefresh() {
        console.log('New content available, refreshing...');
      },
      onOfflineReady() {
        console.log('KSEAB PUC App is cached and ready to work completely offline!');
      },
      onRegisterError(error: unknown) {
        console.warn('PWA service worker registration skipped or failed:', error);
      }
    });
  } catch (e) {
    console.warn('PWA setup caught:', e);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
