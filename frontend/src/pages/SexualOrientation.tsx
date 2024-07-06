import { Dropdown } from "../components/Dropdown";
import { useNavigate } from "@solidjs/router";
import { userOptions } from "../components/UserOptions";

export default function SexualOrient() {
    const navigate = useNavigate();

    return (
        <form class="section-container relative">
            <p class="section-title text-center absolute top-1/4 px-4 select-none">Choose your sexual orientation</p>
            <div class="absolute bottom-10 max-w-1/2 h-1/2 flex flex-col justify-between">
                <Dropdown menuOption={userOptions.sexualOrientation} /> 
                <button type="submit" class="btn-primary order-2" onClick={() => navigate("/relationshiptype")}>Continue</button>
            </div>
        </form>
    )
}