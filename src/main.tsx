import "@/style.css";
import routes from "~react-pages";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, useRoutes } from "react-router";
import { UserStateProvider } from "@/states/UserState";

console.log(routes);
function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <UserStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserStateProvider>
  </StrictMode>,
);
