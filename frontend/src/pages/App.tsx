import { useNavigate } from '@solidjs/router';


export default function App() {
  const navigate = useNavigate();

  return (
    <div class='section-container gap-60'>
      <p class='hana-title'>Hana</p>
      <div class='flex flex-col gap-6 w-[200px]'>
        <button class='btn-primary' onClick={() => navigate("/phonenumber")}>
          Sign In
        </button>
        <button class='btn-primary' onClick={() => navigate("/phonenumber")}>
          Sign Up
        </button>
      </div>
    </div>
  )
}
