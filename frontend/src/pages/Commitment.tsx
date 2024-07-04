import { RadioButton } from "../components/ui/RadioButton";
import { userOptions } from "../components/UserOptions";

// const commitment = [
//     {
//         "id": "longterm",
//         "name": "commit-type",
//         "value": "Long term"
//     },
//     {
//         "id": "shortterm",
//         "name": "commit-type",
//         "value": "Short term"
//     },
//     {
//         "id": "hookup",
//         "name": "commit-type",
//         "value": "Hookup"
//     },
//     {
//         "id": "friendship",
//         "name": "commit-type",
//         "value": "Friendship"
//     },
//     {
//         "id": "other",
//         "name": "commit-type",
//         "value": "Other"
//     }
// ]

export default function Commitment() {
    return (
        <form class="section-container gap-20">
            <p class="section-title text-center px-4">How would you commit to a new connection?</p>
            <div class="max-w-1/2">
                <RadioButton userOption={userOptions.commitment} /> 
            </div>
            <button type="submit" class="btn-primary">Continue</button>
        </form>
    )
}