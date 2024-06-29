import UserOption from "../components/UserOption";
import { useNavigate } from "@solidjs/router";

export default function CommitType() {
    const navigate = useNavigate();

    return (
        <form class="section-container">
            <p class="section-title text-center px-4">For how long would you like to commit to a new connection/relationship?</p>

            <div class="grid w-[12rem] grid-cols-1 p-1 mt-5">
                <UserOption id="long" name="commit-type" option="Long - term"/>
                <UserOption id="short" name="commit-type" option="Short - term" />
                <UserOption id="hookup" name="commit-type" option="Hookup" />
                <UserOption id="friendship" name="commit-type" option="Friendship"/>
                <UserOption id="other" name="commit-type" option="Other"/>       
            </div>
            <input type="submit" value="Continue" class="btn-disabled mt-5" onClick={() => navigate("/sexualidentity")} />
        </form>
    );
}