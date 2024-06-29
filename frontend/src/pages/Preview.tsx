import { Button } from "../components/ui/Button";
import { TextArea } from "../components/ui/TextArea";
import { TextInput } from "../components/ui/TextInput";

export function Preview() {
  return (
    <div class="section-container gap-5">
      <div class="flex flex-col gap-3 items-center w-full">
        <h3 class="text-white">Text input</h3>
        <TextInput type="text" placeholderText="Normal text" />
        <TextInput type="password" placeholderText="Password" />
        <TextInput type="email" placeholderText="Email" />
        <TextArea placeholderText="Text area" />
        <TextArea disabled placeholderText="Disabled text area" />
        <TextInput disabled type="text" placeholderText="Disabled text input" />
      </div>
      <h3 class="text-white">Buttons</h3>
      <div class="flex gap-3 items-center justify-center w-full">
        <Button children="Primary" variant="primary" />
        <Button children="Secondary" variant="secondary" />
        <Button children="Primary small" variant="primary" size="small" />
              <Button children="Secondary large" variant="secondary" size="large" />
              <Button children="Disabled" disabled />
      </div>
    </div>
  );
}
