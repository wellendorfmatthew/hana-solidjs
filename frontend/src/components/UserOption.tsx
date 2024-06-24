import { createSignal, } from "solid-js";

export default function UserOption(props: any) {
    
    const [isClicked, setIsClicked] = createSignal(false);

    function toggleClick() { 
        setIsClicked(!isClicked());
    }
    
    return (
        <li class="relative list-none select-none py-2 pl-1 pr-1 mb-3 option" classList={{"rounded-full": props.rounded, "bg-selection-bg": isClicked(), "bg-opacity-90": isClicked()}} id="listbox-option-0" role="option"  onClick={toggleClick}>
            <div class="text-center">
                <span classList={{ "text-hana-bg": isClicked() }}>{props.option}</span>
            </div>
        </li>
    );
}