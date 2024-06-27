export default function UserOption(props: any) {
    
    return (
        <div class="relative list-none select-none p-2 mb-3 text-center option focus:bg-opacity-100 focus:text-hana-bg focus:font-semibold" classList={{ "rounded-full": props.rounded }} tabindex={0}>
                <label for={props.id}>{props.option}</label>
                <input type="radio" name={props.name} id={props.id} value={props.id} class="hidden" />
        </div>
    );
}