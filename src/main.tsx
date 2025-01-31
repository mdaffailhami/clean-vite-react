import "@/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "@/app/HomePage";
import CountPage from "@/app/count/CountPage";
import NotFoundPage from "@/404";
import { UserContext, useUserState } from "@/states/UserState";

createRoot(document.getElementById("app")!).render(<App />);

function App() {
  return (
    <StrictMode>
      <UserContext.Provider value={useUserState()}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/count/:count?" element={<CountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </StrictMode>
  );
}
