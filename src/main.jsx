import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalProvider } from './contexts/globalContext.jsx';
import { GlobalStyle } from "./styles/GlobalStyle";
import {UserContextProvider} from './contexts/userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <GlobalStyle/>
    <GlobalProvider>
    <App />
    </GlobalProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
