import { createSignal } from "solid-js";
import { useNavigate } from '@solidjs/router';
import { TextArea } from "../components/ui/TextArea";

export default function AboutMe() {
    const navigate = useNavigate();
    const [description, setDescription] = createSignal("");

    const handleDescription = (e : any) => {
        if (e !== null) {
            setDescription(e.target.value);
        }
    }

    return (
        <div class="section-container gap-32">
            <div class="flex items-center justify-center flex-col">
                <p class="section-title">Provide a description</p>
                <p class="section-title">about yourself</p>
            </div>
            <div class="flex justify-center items-end flex-col w-2/3 h-1/3 gap-2">
                <TextArea
                    placeholderText="Write a short description about yourself at least 200 characters in length"
                    value={description()}
                    onChange={(handleDescription)}
                    className="w-full h-full bg-pink-light"
                />
            </div>
            <button class='btn-primary' onClick={() => navigate("/otp")}>
                Continue
            </button>
        </div>
    )
}