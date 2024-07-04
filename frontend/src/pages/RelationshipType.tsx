import { Dropdown } from "../components/Dropdown";
import { useNavigate } from "@solidjs/router";
import { userOptions } from "../components/UserOptions";

// const relationType = [
//     {
//         "id": "bigamy",
//         "name": "relation-type",
//         "value": "Bigamy"
//     },
//     {
//         "id": "casual",
//         "name": "relation-type",
//         "value": "Casual"
//     },
//     {
//         "id": "monogamy",
//         "name": "relation-type",
//         "value": "Monogamy"
//     },
//     {
//         "id": "open",
//         "name": "relation-type",
//         "value": "Open"
//     },
//     {
//         "id": "platonic",
//         "name": "relation-type",
//         "value": "Platonic"
//     },
//     {
//         "id": "polyamory",
//         "name": "relation-type",
//         "value": "Polyamory"
//     },
//     {
//         "id": "polyfidelity",
//         "name": "relation-type",
//         "value": "Polyfidelity"
//     },
//     {
//         "id": "other",
//         "name": "relation-type",
//         "value": "Other"
//     }
// ]

export default function RelationType() {
    const navigate = useNavigate();

    return (
        <form class="section-container relative">
            <p class="section-title text-center absolute top-1/4 px-4">What kind of relationship are you looking for?</p>
            <div class="absolute bottom-10 max-w-1/2 h-1/2 flex flex-col justify-between">
                <Dropdown menuOption={userOptions.relationType} /> 
                <button type="submit" class="btn-primary order-2" onClick={() => navigate("/commitment")}>Continue</button>
            </div>
        </form>
    )
}