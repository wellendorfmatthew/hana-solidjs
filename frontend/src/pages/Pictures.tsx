import { createSignal, onMount } from "solid-js";
import { useNavigate } from '@solidjs/router';
import DefaultPicture from '../assets/images/newpicker.png';

export default function Pictures() {
    const navigate = useNavigate();
    const [pictureList, setPictureList] = createSignal([DefaultPicture, DefaultPicture, DefaultPicture, DefaultPicture, DefaultPicture, DefaultPicture])

    const handleImage = (index : number) => (e: any) => {
        const image = e.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const newPictureList = [...pictureList()];
                if (event.target !== null) {
                    newPictureList[index] = event.target.result as string;
                    setPictureList(newPictureList);
                } else {
                    console.log("Unable to add image please try again.")
                }
            }
            reader.readAsDataURL(image);
        } else {
            console.log("Couldn't get image please try again.")
        }
    }
    return (
        <div class="section-container gap-32">
            <div class="flex items-center justify-center flex-col">
                <p class="section-title">Please select photos to</p>
                <p class="section-title">use for your profile.</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                {pictureList().map((pic, index) => (
                        <div class="relative">
                            <label 
                            for={"picture" + index}
                            class="cursor-pointer"
                            >
                                <img src={pic} class="w-[60px] h-[60px]" />
                            </label>
                            <input 
                                type="file" 
                                class="hidden" 
                                accept="image/*" 
                                id={"picture" + index}
                                onchange={handleImage(index)} 
                            />
                        </div>
                    ))}
            </div>
            <button class='btn-primary' onClick={() => navigate("/otp")}>
                Continue
            </button>
        </div>
    )
}