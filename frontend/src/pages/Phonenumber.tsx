import { createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';

export default function PhoneNumber() {
  const navigate = useNavigate();
  return (
    <div class='background flex flex-col w-screen h-screen items-center justify-center gap-32'>
      <p class='section-title'>Enter your phone number</p>
      <input type="text" />
      <button class='bg-purple-700 rounded-full h-[70px] w-[200px] dm-sans-font button-style' onClick={() => navigate("/otp")}>
        Continue
      </button>
  </div>
  )
}
