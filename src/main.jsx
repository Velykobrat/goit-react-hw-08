
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); 

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error('Failed to find root element');
}