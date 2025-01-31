import { useEffect } from "react";
import { NavigateFunction, Params } from "react-router";

export function useCountState(
  params: Readonly<Params<string>>,
  navigate: NavigateFunction,
) {
  const setCount = (count: number) => {
    if (count < 0) count = 0;

    navigate(`/count/${count}`, { replace: true });
  };

  useEffect(() => {
    setCount(Number(params.count) || 0);
  }, []);

  return {
    get value() {
      return Number(params.count) || 0;
    },
    increment() {
      setCount((Number(params.count) || 0) + 1);
    },
    decrement() {
      setCount((Number(params.count) || 0) - 1);
    },
  };
}
