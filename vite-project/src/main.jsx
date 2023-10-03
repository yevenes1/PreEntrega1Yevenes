import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyAAI7lnb-Hhet6_DPcyB0oTDq960aAaOdo",
  authDomain: "mangaestore-e5039.firebaseapp.com",
  projectId: "mangaestore-e5039",
  storageBucket: "mangaestore-e5039.appspot.com",
  messagingSenderId: "498856586139",
  appId: "1:498856586139:web:2363b1c75555b29e1dcf3e"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);