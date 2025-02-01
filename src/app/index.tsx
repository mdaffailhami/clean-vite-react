import CircleButton from "@/components/CircleButton";
import PrimaryButton from "@/components/PrimaryButton";
import { UserStateContext } from "@/states/UserState";
import { useContext } from "react";

export default function HomePage() {
  const user = useContext(UserStateContext)!;

  console.log("HomePage Render");

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold">Home Page</h1>
      <p className="text-lg">
        Welcome <i>{user.value ? user.value.name : "Guest"}</i>
      </p>
      <PrimaryButton to="/count/0">Go to Count Page</PrimaryButton>
      <section className="fixed right-8 bottom-8 flex flex-col gap-3">
        <CircleButton onClick={user.signIn}>Sign In</CircleButton>
        <CircleButton onClick={user.signOut}>Sign Out</CircleButton>
      </section>
    </div>
  );
}
