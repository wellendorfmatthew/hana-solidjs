import { Dropdown } from "../components/Dropdown";
import { useNavigate } from "@solidjs/router";

const sexualOrientation = [
    {
        "id": "allosexual",
        "name": "sexual-id",
        "value": "Allosexual"
    },
    {
        "id": "androsexual",
        "name": "sexual-id",
        "value": "Androsexual"
    },
    {
        "id": "aromantic",
        "name": "sexual-id",
        "value": "Aromantic"
    },
    {
        "id": "asexual",
        "name": "sexual-id",
        "value": "Asexual"
    },
    {
        "id": "autoromantic",
        "name": "sexual-id",
        "value": "Autoromantic"
    },
    {
        "id": "bicurious",
        "name": "sexual-id",
        "value": "Bicurious"
    },
    {
        "id": "biromantic",
        "name": "sexual-id",
        "value": "Biromantic"
    },
    {
        "id": "bisexual",
        "name": "sexual-id",
        "value": "Bisexual"
    },
    {
        "id": "demisexual",
        "name": "sexual-id",
        "value": "Demisexual"
    },
    {
        "id": "gay",
        "name": "sexual-id",
        "value": "Gay"
    },
    {
        "id": "gynosexual",
        "name": "sexual-id",
        "value": "Gynosexual"
    },
    {
        "id": "lesbian",
        "name": "sexual-id",
        "value": "Lesbian"
    },
    {
        "id": "panromantic",
        "name": "sexual-id",
        "value": "Panromantic"
    },
    {
        "id": "pansexual",
        "name": "sexual-id",
        "value": "Pansexual"
    },
    {
        "id": "queer",
        "name": "sexual-id",
        "value": "Queer"
    },
    {
        "id": "skoliosexual",
        "name": "sexual-id",
        "value": "Skoliosexual"
    },
    {
        "id": "spectrasexual",
        "name": "sexual-id",
        "value": "Spectrasexual"
    },
    {
        "id": "straight",
        "name": "sexual-id",
        "value": "Straight"
    },
    {
        "id": "other",
        "name": "sexual-id",
        "value": "Other"
    }
]

export function SexualOrient() {
    const navigate = useNavigate();

    return (
        <form class="section-container relative">
            <p class="section-title text-center absolute top-1/4 px-4">Choose your sexual orientation</p>
            <div class="absolute bottom-10 max-w-1/2 h-1/2 flex flex-col justify-between">
                <Dropdown menuOption={sexualOrientation} /> 
                <button type="submit" class="btn-primary order-2" onClick={() => navigate("/relationshiptype")}>Continue</button>
            </div>
        </form>
    )
}