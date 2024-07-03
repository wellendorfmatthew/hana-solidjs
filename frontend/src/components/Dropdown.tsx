import { createSignal } from "solid-js";

interface optionInfo {
    name: string;
    value: string;
    id: string;
}

interface menuProps {
    menuOption: optionInfo[];
    placeholder?: string;
}

export function Dropdown({menuOption}: menuProps) {
    const [menuIsOpen, setMenuIsOpen] = createSignal(true);
    const [selected, setSelected] = createSignal("")

    function toggleMenu() {
        setMenuIsOpen(!menuIsOpen());
    }

    return (
        <>
            <div class="relative trigger menu bg-[url('assets/images/caretDown.svg')] bg-no-repeat bg-[left_11rem_top_57%] bg-[length:1rem_1rem] hover:cursor-pointer" onClick={toggleMenu}>
                <span class="px-3 font-hana-text text-green-neon font-medium text-2xl">{selected() ? selected() : "Choose an option"}</span>
            </div>
            <div class="absolute menu top-16 mt-1 z-10 size-34 w-[13rem] p-0" classList={{ "hidden": menuIsOpen() }}>
                <ul class="overflow-y-auto menucontent h-32">
                    {menuOption.map((option) => {
                        return (
                            <li class="mb-1" onClick={() => {
                                if (option.value !== selected()) {
                                    setSelected(option.value);
                                    setMenuIsOpen(true);
                                }
                            }}>
                                <label for={option.id}>{option.value}</label>
                                <input type="radio" id={option.id} name={option.name} value={option.value} class="hidden" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
        
    )
}