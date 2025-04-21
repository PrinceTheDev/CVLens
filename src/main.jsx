import React from 'react'; // This is *essential* for JSX to work
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root')); // Store the root for potential future use
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

