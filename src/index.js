import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import firebaseApp from './firebase';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers);

ReactDOM.render(
<Provider store={ store }>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();