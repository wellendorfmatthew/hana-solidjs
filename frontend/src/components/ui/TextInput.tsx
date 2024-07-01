import { JSX } from "solid-js";
import { cn } from "../../lib/utils";

interface textInputProps {
  placeholderText?: string;
  value?: string;
  onChange?: (e: Event & { currentTarget: HTMLInputElement }) => void;
  type?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  autofocus?: boolean;
}

/**
 * **Text input component that can be used for any input type. It is prestyled but can be styled further with the regular** `class="style"` **attribute**
 * @param placeholder The placeholder text
 * @param value The current value of the input field, typically a state variable like `[value, setValue] = createSignal("")`
 * @param onChange The function to call when the input field changes, typically a function that sets the value of a state variable such as `(e) => setValue(e.target.value)`
 * @param autofocus The autofocus attribute, only one element per page can have this attribute. The element with this attribute will be focused on page load.
 * @param type The type of input field, defaults to text but can be changed to password, email, etc.
 * @param className This prop can be ignored, it is used to merge the default styles with any additional styles passed in. Use the normal `class` attribute to add styles.
 * @returns An input field of type JSX.Element
 */
export function TextInput({
  placeholderText,
  value = "",
  onChange,
  type = "text",
  className,
  disabled,
  required,
  autofocus,
}: textInputProps): JSX.Element {
  return (
    <>
      <input
        autofocus={autofocus}
        disabled={disabled}
        required={required}
        type={type}
        class={cn(
          "peer/textinput h-10 w-[30%] rounded-md bg-pink-light px-3 py-2 text-sm ring-offset-background  placeholder:text-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
      />
      {!disabled && (
        <>
          {required && (
            <span class="text-red-500 text-right w-[30%] m-0 text-xs hidden peer-invalid/textarea:block">
              This field is required
            </span>
          )}
          {!required && (
            <span class="text-red-500 text-right w-[30%] m-0 text-xs hidden peer-invalid/textinput:block">
              Please enter a valid {type}
            </span>
          )}
        </>
      )}
    </>
  );
}
