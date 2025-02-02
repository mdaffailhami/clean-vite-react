import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export function useCountState() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCount(Number(params.count) || 0);
  }, []);

  const setCount = (count: number) => {
    if (count < 0) count = 0;

    navigate(`/count/${count}`, { replace: true });
  };

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
