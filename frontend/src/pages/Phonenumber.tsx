import { useNavigate } from '@solidjs/router';

export default function PhoneNumber() {
  const navigate = useNavigate();
  return (
    <div class='section-container gap-32'>
      <p class='section-title'>Enter your phone number</p>
      <input type="text" class="input" placeholder="555-555-555"/>
      <button class='btn-primary' onClick={() => navigate("/otp")}>
        Continue
      </button>
  </div>
  )
}
