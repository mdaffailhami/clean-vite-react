import { Navigate } from "react-router";

export default function CountPage() {
  // Navigate to the "/count/0" route and replace the current entry in the history stack
  return <Navigate to="/count/0" replace />;
}
