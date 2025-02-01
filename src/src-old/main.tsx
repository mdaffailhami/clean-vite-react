import "@/src-old/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "@/src-old/app/HomePage";
import CountPage from "@/src-old/app/count/CountPage";
import NotFoundPage from "@/src-old/404";
import { UserStateProvider } from "@/src-old/states/UserState";

createRoot(document.getElementById("app")!).render(<App />);

function App() {
  console.log("App Render");
  return (
    // <StrictMode>
    <UserStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/count/:count?" element={<CountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserStateProvider>
    // </StrictMode>
  );
}
