import { TextInput } from "../components/ui/TextInput";

export function Preview() {
    return (
        <div class="section-container">
            <h3>Text input</h3>
            <p></p>
            <TextInput type="text" placeholder="Normal text" />
            <TextInput type="password" placeholder="Password" />
            <TextInput type="email" placeholder="Email" />
            <TextInput type="textarea" placeholder="Text area" />
        </div>
    )
}