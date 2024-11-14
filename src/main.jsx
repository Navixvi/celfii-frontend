import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import axios from "axios";
import store from "./redux";

import App from "./App.jsx";
import "./index.css";

axios.defaults.baseURL = "http://localhost:3001";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
				<App />
			</BrowserRouter>
    </Provider>
  </StrictMode>
);
