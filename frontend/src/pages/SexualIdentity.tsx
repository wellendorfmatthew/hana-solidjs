import UserOption from "../components/UserOption";

export default function SexualId() {
    return (
        <div class="section-container">
            <p class="section-title mt-5">Your sexual identity</p>
            <div class="grid w-[12rem] grid-cols-1 p-1 mt-4 overflow-y-auto">
                <ul>
                    <UserOption option="Allosexual" rounded={true} />
                    <UserOption option="Androsexual" rounded={true} />
                    <UserOption option="Aromantic" rounded={true} />
                    <UserOption option="Asexual" rounded={true} />
                    <UserOption option="Autoromantic" rounded={true} />
                    <UserOption option="Bicurious" rounded={true} />
                    <UserOption option="Biromantic" rounded={true} />
                    <UserOption option="Bisexual" rounded={true} />
                    <UserOption option="Demisexual" rounded={true} />
                    <UserOption option="Gay" rounded={true} />
                    <UserOption option="Gynosexual" rounded={true} />
                    <UserOption option="Lesbian" rounded={true} />
                    <UserOption option="Panromantic" rounded={true} />
                    <UserOption option="Pansexual" rounded={true} />
                    <UserOption option="Queer" rounded={true} />
                    <UserOption option="Skoliosexual" rounded={true} />
                    <UserOption option="Spectrasexual" rounded={true} />
                    <UserOption option="Other" rounded={true} />
                </ul>
            </div>
            <button class="btn-disabled my-5">Continue</button>
        </div> 
    )
    
}