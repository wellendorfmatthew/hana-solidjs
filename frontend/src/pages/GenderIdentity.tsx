import UserOption from "../components/UserOption";


export default function GenderId() {
    const menuOpen = document.getElementById("gender-id");

    function toggleMenu() {
        if (menuOpen !== null) {
            menuOpen.setAttribute("size", "3")
        }
    }
    return (
        
        <form class="section-container">
            <p class="section-title">Choose your gender</p>
            
            <p class="section-subtitle">Cisgender Options</p>
            <div class="grid w-[12rem] grid-cols-1 p-1">
                <div>
                    <UserOption name="cisfemale" option="cis female" rounded={true} />
                    <UserOption name="cismale" option="cis male" rounded={true} />
                </div>        
            </div>

            <p class="section-subtitle">Transgender Options</p>
            <div class="grid w-[12rem] grid-cols-1 p-1">
                <div>
                    <UserOption name="transfemale" option="trans female" rounded={true} />
                    <UserOption name="transmale" option="trans male" rounded={true} />
                </div>
            </div>

            <div class="mt-2">
                <label for="gender-id" class="section-subtitle block">Non - binary and more</label>

                <select name="gender-id" id="gender-id" class="option rounded-full focus:outline-none focus:ring-2 focus:ring-selection-bg" onClick={toggleMenu}>
                    <option value="">Choose an option</option>
                    <option value="agender"><UserOption name="agender" option="Agender" /></option>
                    <option value="bigender"><UserOption name="bigender" option="Bigender" /></option>
                    <option value="demiflux"><UserOption name="demiflux" option="Demiflux" /></option>
                    <option value="demigender"><UserOption name="demigender" option="Demigender" /></option>
                    <option value="genderfluid"><UserOption name="genderfluid" option="Genderfluid" /></option>
                    <option value="genderneutral"><UserOption name="genderneutral" option="Genderneutral" /></option>
                    <option value="genderqueer"><UserOption name="genderqueer" option="Genderqueer" /></option>
                    <option value="nonbinary"><UserOption name="nonbinary" option="Non - binary" /></option>
                    <option value="pangender"><UserOption name="pangender" option="Pangender" /></option>
                    <option value="polygender"><UserOption name="polygender" option="Polygender" /></option>
                    <option value="trigender"><UserOption name="trigender" option="Trigender" /></option>
                    <option value="other"><UserOption name="other" option="Other" /></option>
                </select>
            </div>
            <a href="./sexualidentity"><input type="submit" value="Continue" class="btn-disabled mt-10" /></a>
        </form>
    
    );
}