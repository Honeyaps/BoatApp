// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Card, NextUIProvider } from "@nextui-org/react";
import Speaker from "./Component/Speaker";
import "./index.css";
import App from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <NextUIProvider>
        
        <App />
       
      </NextUIProvider>
        
  </React.StrictMode>
);
    
