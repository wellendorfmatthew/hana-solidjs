import { createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';


export default function App() {
  const [count, setCount] = createSignal(0);
  const navigate = useNavigate();

  return (
    <div class='background flex flex-col w-screen h-screen items-center justify-center gap-60'>
      <p class='text-xl text-purple-700 hana-font'>Hana</p>
      <div class='flex flex-col gap-6 w-[200px]'>
        <button class='bg-purple-700 rounded-full h-[70px] w-[200px] dm-sans-font button-style' onClick={() => navigate("/phonenumber")}>
          Sign In
        </button>
        <button class='bg-purple-700 rounded-full h-[70px] w-[200px] dm-sans-font button-style' onClick={() => navigate("/phonenumber")}>
          Sign Up
        </button>
      </div>
    </div>
  )
}
