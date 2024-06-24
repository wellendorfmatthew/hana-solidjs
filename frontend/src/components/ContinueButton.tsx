import { createSignal } from "solid-js/types/server/reactive.js";

// makes the "Continue" button clickable if some option is selected
// should be conditional to at least one <UserOption> being clicked
export default function ButtonState() {
    const [isActive, setIsActive] = createSignal(false);

    function toggleButton() {
        setIsActive(!isActive())        
    }

    return (
        <button class="btn-disabled mt-10" classList={{"btn-primary": isActive()}} onClick={toggleButton}>Continue</button>
    )
    
}
