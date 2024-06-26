export default function UserOption(props: any) {
    
    return (
        <div class="relative list-none select-none ">
            <button class="p-2 mb-3 text-center option focus:bg-opacity-100 focus:text-hana-bg" classList={{ "rounded-full": props.rounded }}>
                <label for={props.name}>{props.option}</label>
                <input type="radio" name={props.name} id={props.name} value={props.name} class="hidden" required />
            </button>
        </div>
    );
}