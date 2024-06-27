import UserOption from "../components/UserOption";

export default function SexualId() {
    return (
        <form class="section-container">
            <p class="section-title mt-5">Your sexual identity</p>
            <div class="grid w-[12rem] grid-cols-1 py-3 mt-4 overflow-y-auto">
                <UserOption name="sexual-id" id="allosexual" option="Allosexual" rounded={true} />
                <UserOption name="sexual-id" id="androsexual" option="Androsexual" rounded={true} />
                <UserOption name="sexual-id" id="aromantic" option="Aromantic" rounded={true} />
                <UserOption name="sexual-id" id="asexual" option="Asexual" rounded={true} />
                <UserOption name="sexual-id" id="autoromantic" option="Autoromantic" rounded={true} />
                <UserOption name="sexual-id" id="bicutious" option="Bicurious" rounded={true} />
                <UserOption name="sexual-id" id="biromantic" option="Biromantic" rounded={true} />
                <UserOption name="sexual-id" id="bisexual" option="Bisexual" rounded={true} />
                <UserOption name="sexual-id" id="demisexual" option="Demisexual" rounded={true} />
                <UserOption name="sexual-id" id="gay" option="Gay" rounded={true} />
                <UserOption name="sexual-id" id="gynosexual" option="Gynosexual" rounded={true} />
                <UserOption name="sexual-id" id="lesbian" option="Lesbian" rounded={true} />
                <UserOption name="sexual-id" id="panromantic" option="Panromantic" rounded={true} />
                <UserOption name="sexual-id" id="pansexual" option="Pansexual" rounded={true} />
                <UserOption name="sexual-id" id="queer" option="Queer" rounded={true} />
                <UserOption name="sexual-id" id="skoliosexual" option="Skoliosexual" rounded={true} />
                <UserOption name="sexual-id" id="spectrasexual" option="Spectrasexual" rounded={true} />
                <UserOption name="sexual-id" id="other" option="Other" rounded={true} />
            </div>
            <a href="./relationshiptype"><input type="submit" value="Continue" class="btn-disabled mt-10" /></a>
        </form> 
    )
    
}