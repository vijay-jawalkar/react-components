import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { DarkProvider } from "./context/DarkContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DarkProvider>
      <App />
    </DarkProvider>
  </StrictMode>
);
