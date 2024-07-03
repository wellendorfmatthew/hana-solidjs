interface option {
    name: string;
    value: string;
    id: string;
}

interface optionProps {
    userOption: option[];
}

export function RadioButton({userOption}: optionProps) {
    return (
        <>
            {userOption.map((option) => {
                return (
                    <div class="relative list-none select-none p-2 mb-3 text-center option focus:bg-green-neon/100 focus:text-purple-dark focus:font-semibold" tabindex={0}>
                        <label for={option.id} class="font-normal text-2xl">{option.value}</label>
                        <input type="radio" id={option.id} name={option.name} value={option.value} class="hidden" />
                    </div>
                )
            })}
        </>       
    )
}