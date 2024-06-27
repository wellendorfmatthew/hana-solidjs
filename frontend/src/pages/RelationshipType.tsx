import UserOption from "../components/UserOption";

export default function RelationType() {
    return (
        <form class="section-container">
            <p class="section-title text-center mb-3">What kind of relationship are you looking for?</p>
            <div class="grid w-[12rem] grid-cols-1 p-1 mt-4 overflow-y-auto py-3">
                <UserOption name="relation-type" id="bigamy" option="Bigamy" rounded={true} />
                <UserOption name="relation-type" id="casual" option="Casual" rounded={true} />
                <UserOption name="relation-type" id="monogamy" option="Monogamy" rounded={true} />
                <UserOption name="relation-type" id="open" option="Open" rounded={true} />
                <UserOption name="relation-type" id="platonic" option="Platonic" rounded={true} />
                <UserOption name="relation-type" id="polyamory" option="Polyamory" rounded={true} />
                <UserOption name="relation-type" id="polyfidelity" option="Polyfidelity" rounded={true} />
                <UserOption name="relation-type" id="other" option="Other" rounded={true} />
            </div>
            <a href="./commitment"><input type="submit" value="Continue" class="btn-disabled mt-10" /></a>
        </form>
    )    
}