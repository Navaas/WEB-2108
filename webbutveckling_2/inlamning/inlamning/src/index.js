import React from 'react';
import ReactDOM from 'react-dom';
import './utils/global/css/global.css';
import App from './App';
import {AlbumContextProvider} from "./context/AlbumContext";


ReactDOM.render(
    <AlbumContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </AlbumContextProvider>,
  document.getElementById('root')
);
