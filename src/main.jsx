import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./context/contextProvider.jsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1dc307",
          colorTextPlaceholder: "#595958",
        },
      }}
    >
      <ContextProvider>
        <App />
      </ContextProvider>
    </ConfigProvider>
  </StrictMode>
);
