import UserOption from "../components/UserOption";

export default function CommitType() {
    return (
        <div class="section-container">
            <p class="section-title text-center">For how long would you like to commit to a new connection/relationship?</p>

            <div class="grid w-[12rem] grid-cols-1 p-1 mt-5">
            <ul>
                <UserOption option="Friendship"/>
                <UserOption option="Hookup" />
                <UserOption option="Long - term"/>
                <UserOption option="Short - term" />
                <UserOption option="Other"/>    
            </ul>        
            </div>
            <button class="btn-disabled mt-10">Continue</button>
        </div>
    );
}