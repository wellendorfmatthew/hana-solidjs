import UserOption from "../components/UserOption";

export default function RelationType() {
    return (
        <form class="section-container">
            <p class="section-title text-center mb-3">What kind of relationship are you looking for?</p>
            <div class="grid w-[12rem] grid-cols-1 p-1 mt-4 overflow-y-auto">
                <UserOption name="bigamy" option="Bigamy" rounded={true} />
                <UserOption name="casual" option="Casual" rounded={true} />
                <UserOption name="monogamy" option="Monogamy" rounded={true} />
                <UserOption name="open" option="Open" rounded={true} />
                <UserOption name="platonic" option="Platonic" rounded={true} />
                <UserOption name="polyamory" option="Polyamory" rounded={true} />
                <UserOption name="polyfidelity" option="Polyfidelity" rounded={true} />
                <UserOption name="other" option="Other" rounded={true} />
            </div>
            <a href="./commitment"><input type="submit" value="Continue" class="btn-disabled mt-10" /></a>
        </form>
    )    
}