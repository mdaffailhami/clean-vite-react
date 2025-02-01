import { create } from 'zustand';

const useCountStore = create((set) => ({
  value: 0,
  increment() {
    set(({ value }) => ({ value: value + 1 }));
  },
  decrement() {
    set(({ value }) => ({ value: value - 1 }));
  },
}));

export default function CountPage() {
  console.log('CountPage render');

  return (
    <div style={{ marginTop: '200px' }}>
      <ValueSection />
      <ButtonsSection />
    </div>
  );
}

function ValueSection() {
  const value = useCountStore((state) => state.value);

  console.log('ValueSection render');

  return <h1>Count: {value}</h1>;
}

function ButtonsSection() {
  // const { increment, decrement } = useCountStore();

  //   const increment = useCountStore((state) => state.increment);
  //   const decrement = useCountStore((state) => state.decrement);

  const { increment, decrement } = {
    increment: useCountStore((state) => state.increment),
    decrement: useCountStore((state) => state.decrement),
  };

  console.log('ButtonsSection render');

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
