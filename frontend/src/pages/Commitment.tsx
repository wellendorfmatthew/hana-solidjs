import UserOption from "../components/UserOption";

export default function CommitType() {
    return (
        <form class="section-container">
            <p class="section-title text-center">For how long would you like to commit to a new connection/relationship?</p>

            <div class="grid w-[12rem] grid-cols-1 p-1 mt-5">
                <UserOption name="longterm" option="Long - term"/>
                <UserOption name="shortterm" option="Short - term" />
                <UserOption name="hookup" option="Hookup" />
                <UserOption name="friendship" option="Friendship"/>
                <UserOption name="other" option="Other"/>       
            </div>
            <a href="#"><input type="submit" value="Continue" class="btn-disabled mt-10" /></a>
        </form>
    );
}