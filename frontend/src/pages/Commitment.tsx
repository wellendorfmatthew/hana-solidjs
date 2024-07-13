import { RadioButton } from "../components/ui/RadioButton";
import { userOptions } from "../components/UserOptions";

export default function Commitment() {
    return (
        <form class="section-container gap-20">
            <p class="section-title text-center px-4 select-none">How would you commit to a new connection?</p>
            <div class="max-w-1/2">
                <RadioButton userOption={userOptions.commitment} /> 
            </div>
            <button type="submit" class="btn-primary">Continue</button>
        </form>
    )
}