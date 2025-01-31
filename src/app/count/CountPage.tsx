import CircleButton from "@/components/CircleButton";
import PrimaryButton from "@/components/PrimaryButton";
import { useContext } from "react";
import { UserStateContext } from "@/states/UserState";
import { useCountState } from "@/app/count/CountState";

export default function CountPage() {
  const user = useContext(UserStateContext)!;
  const count = useCountState();

  console.log("CountPage Render");

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold">Count Page</h1>
      <p className="text-lg">
        {user.value ? user.value.name : "Guest"} | Count: <b>{count.value}</b>
      </p>
      <PrimaryButton to="/">Go to Home Page</PrimaryButton>
      <section className="fixed right-8 bottom-8 flex flex-col gap-3">
        <CircleButton onClick={count.increment}>+</CircleButton>
        <CircleButton onClick={count.decrement}>-</CircleButton>
      </section>
    </div>
  );
}

// export default function CountPage() {
//   const params = useParams();
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     _setCount(Number(params.count) || 0);
//   }, []);

//   function _setCount(count: number) {
//     if (count < 0) count = 0;
//     navigate(`/count/${count}`, { replace: true });
//   }

//   function increment() {
//     _setCount((Number(params.count) || 0) + 1);
//   }

//   function decrement() {
//     _setCount((Number(params.count) || 0) - 1);
//   }

//   return (
//     <div className="flex h-screen flex-col items-center justify-center">
//       <h1 className="mb-4 text-6xl font-bold">Count Page</h1>
//       <p className="text-lg">
//         Count: <b>{params.count}</b>
//       </p>
//       <PrimaryButton to="/">Go to Home Page</PrimaryButton>
//       <section className="fixed right-8 bottom-8 flex flex-col gap-3">
//         <CircleButton setCount={increment}>+</CircleButton>
//         <CircleButton setCount={decrement}>-</CircleButton>
//       </section>
//     </div>
//   );
// }
