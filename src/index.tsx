import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { WomenClothes } from './components/page/WomenClothes';

const container = document.getElementById('app')!;
const root = createRoot(container);

/* setting default router as women clothes */
// used navigate in react router to direct from root route
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <Router>
   <Routes>
   <Route path="/*" element={<Navigate to="/women-clothes" replace />}/>
   <Route path="/women-clothes" element={<WomenClothes/>}></Route>
   </Routes> 
    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


