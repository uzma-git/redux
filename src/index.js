import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";


let uzma = ReactDOM.createRoot(document.querySelector("#root"));

uzma.render(
    <React.StrictMode>

    <Provider store={store}>         
        
         <App />
    
         </Provider>
  


    </React.StrictMode>
);
