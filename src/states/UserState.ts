import { createContext, useState } from "react";

type User = {
  id: number;
  name: string;
};

export const UserContext = createContext<
  ReturnType<typeof useUserState> | undefined
>(undefined);

export function useUserState() {
  const [user, setUser] = useState<User | null>(null);

  return {
    get value() {
      return user;
    },
    signIn() {
      setUser({ id: 1, name: "DaffaIma" });
    },
    signOut() {
      setUser(null);
    },
  };
}
