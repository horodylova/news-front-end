import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {AppProvider} from './contexts/AppContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AppProvider>
     <App />
     <ToastContainer />
     </AppProvider>
  </BrowserRouter>
);