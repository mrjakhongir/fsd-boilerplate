import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "./app/providers/providers.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
