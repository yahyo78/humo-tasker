import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { Bounce, ToastContainer } from "react-toastify";
import ToastyfyContainer from "./components/toastyfyContainer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastyfyContainer />
      <App />
    </Provider>
  </StrictMode>
);
