import UserOption from "../components/UserOption";

export default function SexualId() {
    return (
        <form class="section-container">
            <p class="section-title mt-5">Your sexual identity</p>
            <div class="grid w-[12rem] grid-cols-1 p-1 mt-4 overflow-y-auto">
                <UserOption name="allosexual" option="Allosexual" rounded={true} />
                <UserOption name="androsexual" option="Androsexual" rounded={true} />
                <UserOption name="aromantic" option="Aromantic" rounded={true} />
                <UserOption name="asexual" option="Asexual" rounded={true} />
                <UserOption name="autoromantic" option="Autoromantic" rounded={true} />
                <UserOption name="bicurious" option="Bicurious" rounded={true} />
                <UserOption name="biromantic" option="Biromantic" rounded={true} />
                <UserOption name="bisexual" option="Bisexual" rounded={true} />
                <UserOption name="demisexual" option="Demisexual" rounded={true} />
                <UserOption name="gay" option="Gay" rounded={true} />
                <UserOption name="gynosexual" option="Gynosexual" rounded={true} />
                <UserOption name="lesbian" option="Lesbian" rounded={true} />
                <UserOption name="panromantic" option="Panromantic" rounded={true} />
                <UserOption name="pansexual" option="Pansexual" rounded={true} />
                <UserOption name="queer" option="Queer" rounded={true} />
                <UserOption name="skoliosexual" option="Skoliosexual" rounded={true} />
                <UserOption name="spectrasexual" option="Spectrasexual" rounded={true} />
                <UserOption name="other" option="Other" rounded={true} />
            </div>
            <a href="./relationshiptype"><input type="submit" value="Continue" class="btn-disabled mt-10" /></a>
        </form> 
    )
    
}