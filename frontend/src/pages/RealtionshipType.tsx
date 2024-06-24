import UserOption from "../components/UserOption";

export default function RelationType() {
    return (
        <div class="section-container">
            <p class="section-title text-center mb-3">What kind of relationship are you looking for?</p>
            <div class="grid w-[12rem] grid-cols-1 p-1 mt-4 overflow-y-auto">
                <ul>
                    <UserOption option="Bigamy" rounded={true} />
                    <UserOption option="Casual" rounded={true} />
                    <UserOption option="Monogamy" rounded={true} />
                    <UserOption option="Open" rounded={true} />
                    <UserOption option="Platonic" rounded={true} />
                    <UserOption option="Polyamory" rounded={true} />
                    <UserOption option="Polyfidelity" rounded={true} />
                    <UserOption option="Other" rounded={true} />
                </ul>
            </div>
            <button class="btn-disabled my-5">Continue</button>
        </div>
    )    
}