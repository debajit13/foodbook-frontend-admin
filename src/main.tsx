import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import store from './store/store.ts';
import { Provider } from 'react-redux';
import { Flowbite } from 'flowbite-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Flowbite>
      <Provider store={store}>
        <App />
      </Provider>
    </Flowbite>
  </React.StrictMode>
);
