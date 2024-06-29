import { JSX } from "solid-js";

interface textInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: Event) => void;
  type?: string;
}

/**
 * Text input component that can be used for any input type. It is prestyled but can be styled further with the regular 'class="style"' attribute
 * @param placeholder The placeholder text
 * @param value The current value of the input field, typically a state variable like [value, setValue] = createSignal("")
 * @param onChange The function to call when the input field changes, typically a function that sets the value of a state variable such as (e) => setValue(e.target.value)
 * @param type The type of input field, defaults to text but can be changed to password, email, textarea etc.
 * @returns An input field of type JSX.Element
 */
export function TextInput({
  placeholder,
  value,
  onChange,
  type = "text",
}: textInputProps): JSX.Element {
  return (
    <input
      type={type}
      class="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
