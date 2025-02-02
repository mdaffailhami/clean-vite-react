import "@/style.css";
import routes from "~react-pages";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, useRoutes } from "react-router";
import { UserStateProvider } from "@/states/UserState";

createRoot(document.getElementById("app")!).render(<App />);

function App() {
  // <StrictMode></StrictMode>
  return (
    <UserStateProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserStateProvider>
  );
}

function Routes() {
  const routesElement = useRoutes(routes);

  console.log("Routes render");
  console.log(routes);

  // Prevent trailing slash
  const pathname = window.location.pathname;
  if (pathname != "/" && pathname.endsWith("/")) {
    window.location.pathname = pathname.slice(0, -1);
    window.history.replaceState({}, "", pathname);
  }

  return <Suspense fallback={<p>Loading...</p>}>{routesElement}</Suspense>;
}
