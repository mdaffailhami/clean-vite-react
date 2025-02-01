export default function CircleButton(props: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => props.onClick()}
      className="cursor-pointer rounded-full bg-blue-500 px-5 py-2 text-5xl font-bold text-white hover:bg-blue-700"
    >
      {props.children}
    </button>
  );
}
