import { createSignal } from "solid-js/types/server/reactive.js";
import UserOption from "./UserOption";

// opens the menu on click
export default function DropdownMenu() {
    const [isOpen, setIsOpen] = createSignal(false);

    function toggleMenu() {
        setIsOpen(!isOpen());
    }

    return (
        <ul class="hidden dropdown-menu focus: outline-none sm:text-sm" classList={{ "hidden": isOpen() }} tabindex="-1" role="listbox" onClick={toggleMenu}>
            <UserOption option="Agender" />
            <UserOption option="Bigender" />
            <UserOption option="Demiflux" />
            <UserOption option="Demigender" />
            <UserOption option="Genderfluid" />
            <UserOption option="Genderneutral" />
            <UserOption option="Genderqueer" />
            <UserOption option="Non - binary" />
            <UserOption option="Pangender" />
            <UserOption option="Polygender" />
            <UserOption option="Trigender" />
            <UserOption option="Other" />
        </ul>
    )
}