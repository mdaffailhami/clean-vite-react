import { Link } from "react-router";

//
// DO NOT INCLUDE THIS ROOT, SINCE THIS IS A COMPONENT NOT A PAGE
//
export default function DoNotIncludeThisRoute(props: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={props.to}
      className="mt-6 rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
    >
      {props.children}
    </Link>
  );
}
