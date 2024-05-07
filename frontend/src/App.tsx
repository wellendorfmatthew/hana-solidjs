import { createSignal } from 'solid-js';

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class='background flex flex-col w-screen h-screen items-center justify-center'>
      <p class='text-xl text-purple-700 hana-font'>Hana</p>
    </div>
  )
}
