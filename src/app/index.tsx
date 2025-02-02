import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-around bg-orange-500 py-4 font-bold text-white">
          <a href="/">
            <img className="h-8 w-8" src="/vite.svg" alt="logo" />
          </a>
          <ul className="flex items-center gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/count">Count</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        Created by{" "}
        <a
          href="https://mdaffailhami.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daffa Ilhami{" "}
        </a>
        with ❤️
      </footer>
    </>
  );
}
