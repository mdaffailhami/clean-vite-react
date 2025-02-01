import { Link } from "react-router";

export default function PrimaryButton(props: {
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
