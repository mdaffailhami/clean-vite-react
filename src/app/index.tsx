import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-around bg-orange-500 py-4 font-bold text-white">
          <Link to="/">
            <img className="h-8 w-8" src="/vite.svg" alt="logo" />
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/count">Count</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        Created by{" "}
        <Link
          to="https://mdaffailhami.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold italic underline"
        >
          Daffa Ilhami{" "}
        </Link>
        with ❤️
      </footer>
    </>
  );
}
