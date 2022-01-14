import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RoomProvider } from './Context';

ReactDOM.render(
    <RoomProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RoomProvider>,
    document.getElementById('root')
);

reportWebVitals();
