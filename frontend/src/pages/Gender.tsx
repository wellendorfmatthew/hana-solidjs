import { Dropdown } from "../components/Dropdown";
import { useNavigate } from "@solidjs/router";
import { userOptions } from "../components/UserOptions";

export default function Gender() {
    const navigate = useNavigate();

    return (
        <form class="section-container relative">
            <p class="section-title absolute top-1/4">Choose your gender</p>
            <div class="absolute bottom-10 max-w-1/2 h-1/2 flex flex-col justify-between">
                <Dropdown menuOption={userOptions.genderOptions} /> 
                <button type="submit" class="btn-primary order-2" onClick={() => navigate("/sexualorientation")}>Continue</button>
            </div>
        </form>
    )
}