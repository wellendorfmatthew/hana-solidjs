import { createSignal } from "solid-js";
import store from "../store";

export default function UserInfo() {
  const [userInfo, setUserInfo] = createSignal({
    name: "",
    age: "",
    location: "",
  });
    
  const currentStep = store.navigation.signup;
  const handleInput = (key: string, value: any) => {
    setUserInfo((prev: any) => ({ ...prev, [key]: value }));
  };

    return (
      <div class="w-1/2">
        <p class="section-title">Personal Info</p>
        <div class="bg-slate-100 rounded-md p-6 flex flex-col gap-2 h-[350px] items-center">
          <input
            type="text"
            class="input ring-2 ring-purple-700 rounded-md"
            placeholder="Name"
            value={userInfo().name}
            onInput={(e) => handleInput("name", e.currentTarget.value)}
          />
          <input
            type="number"
            class="input ring-2 ring-purple-700 rounded-md"
            placeholder="Age"
            value={userInfo().age}
            onInput={(e) => handleInput("email", e.currentTarget.value)}
          />
          <input
            type="text"
            class="input ring-2 ring-purple-700 rounded-md"
            placeholder="Location"
            value={userInfo().location}
            onInput={(e) => handleInput("password", e.currentTarget.value)}
          />
          <button class="bg-purple-700 w-1/3 rounded-md py-1">Continue</button>
        </div>
      </div>
    );
}
