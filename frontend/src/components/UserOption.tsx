import { JSX } from "solid-js"

interface optionProps {
    id: string
    name: string
    option: string 
    rounded?: boolean
}

export default function UserOption({ id, name, option, rounded }: optionProps): JSX.Element {
    
    return (
        <div class="relative list-none select-none p-2 mb-3 text-center option focus:bg-opacity-100 focus:text-hana-bg focus:font-semibold" classList={{ "rounded-full": rounded }} tabindex={0}>
                <label for={id}>{option}</label>
                <input type="radio" name={name} id={id} value={id} required class="hidden" />
            </div>

    );
}