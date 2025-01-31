import { createContext, useState } from "react";

type User = {
  id: number;
  name: string;
};

export const UserStateContext = createContext<
  ReturnType<typeof useUserState> | undefined
>(undefined);

export function UserStateProvider(props: { children: React.ReactNode }) {
  const user = useUserState();

  return (
    <UserStateContext.Provider value={user}>
      {props.children}
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const [value, setValue] = useState<User | null>(null);

  return {
    get value() {
      return value;
    },
    signIn() {
      if (value) return; // Prevent sign in twice
      setValue({ id: 1, name: "DaffaIma" });
    },
    signOut() {
      setValue(null);
    },
  };
}
