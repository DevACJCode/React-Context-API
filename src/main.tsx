import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AnimeProvider } from "./contexts/animeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimeProvider>
      <App />
    </AnimeProvider>
  </React.StrictMode>
);
