import { createSignal, onMount } from 'solid-js';

export default function OTP() {
  const [otp, setOtp] = createSignal(["", "", "", ""]);

  const handleInput = (index: number, value: any) => {
    if (isNaN(value)) {
      return;
    }

  const updatedOtp = [...otp()];
    updatedOtp[index] = value;

    if (value !== '') {
      const nextIndex = index + 1;
      if (nextIndex < 4) {
        const nextInput = document.querySelectorAll('.input')[nextIndex] as HTMLInputElement;
        nextInput.focus();
      }
    }

    setOtp(updatedOtp);
  };

  const handleKeyup = (index: number, e: any) => {
    const key = e.key.toLowerCase();
    if (key === 'backspace' || key === 'delete') {
      const updatedOtp = [...otp()];
      updatedOtp[index] = '';

      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        const prevInput = document.querySelectorAll('.input')[prevIndex] as HTMLInputElement;
        prevInput.focus();
      }

      setOtp(updatedOtp);
    }
  };

  onMount(() => {
    const inputs = document.querySelectorAll('.input')[0] as HTMLInputElement;
    inputs.focus();
  });

  return (
    <div class='background flex flex-col w-screen h-screen items-center justify-center gap-32'>
      <p class='section-title'>Enter OTP</p>
      <div class='inputs' id='inputs'>
        <input type="text" class='input' inputMode='numeric' maxlength={1} value={otp()[0]} onInput={(e) => handleInput(0, e.currentTarget.value)} onKeyUp={(e) => handleKeyup(0, e)}/>
        <input type="text" class='input' inputMode='numeric' maxlength={1} value={otp()[1]} onInput={(e) => handleInput(1, e.currentTarget.value)} onKeyUp={(e) => handleKeyup(1, e)}/>
        <input type="text" class='input' inputMode='numeric' maxlength={1} value={otp()[2]} onInput={(e) => handleInput(2, e.currentTarget.value)} onKeyUp={(e) => handleKeyup(2, e)}/>
        <input type="text" class='input' inputMode='numeric' maxlength={1} value={otp()[3]} onInput={(e) => handleInput(3, e.currentTarget.value)} onKeyUp={(e) => handleKeyup(3, e)}/>
      </div>
      <button class='bg-purple-700 rounded-full h-[70px] w-[200px] dm-sans-font button-style'>
        Continue
      </button>
    </div>
  )
}
