import UserOption from "../components/UserOption";


export default function GenderId() {
    function toggleMenu() {
        const menuOpen = document.getElementById("gender-id");
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
                    <UserOption name="gender" id="cisfemale" option="cis female" rounded={true} />
                    <UserOption name="gender" id="cismale" option="cis male" rounded={true} />
                </div>        
            </div>

            <p class="section-subtitle">Transgender Options</p>
            <div class="grid w-[12rem] grid-cols-1 p-1">
                <div>
                    <UserOption name="gender" id="transfemale" option="trans female" rounded={true} />
                    <UserOption name="gender" id="transmale" option="trans male" rounded={true} />
                </div>
            </div>

            <div class="mt-2">
                <label for="gender-id" class="section-subtitle block">Non - binary and more</label>

                <select name="gender" id="gender-id" class="option rounded-full focus:outline-none focus:ring-1 focus:ring-selection-bg" onClick={toggleMenu}>
                    <option value="">Choose an option</option>
                    <option value="agender"><UserOption name="gender" id="agender" option="Agender" /></option>
                    <option value="bigender"><UserOption name="gender" id="bigender" option="Bigender" /></option>
                    <option value="demiflux"><UserOption name="gender" id="demiflux" option="Demiflux" /></option>
                    <option value="demigender"><UserOption name="gender" id="demigender" option="Demigender" /></option>
                    <option value="genderfluid"><UserOption name="gender" id="genderfluid" option="Genderfluid" /></option>
                    <option value="genderneutral"><UserOption name="gender" id="genderneutral" option="Genderneutral" /></option>
                    <option value="genderqueer"><UserOption name="gender" id="genderqueer" option="Genderqueer" /></option>
                    <option value="nonbinary"><UserOption name="gender" id="nonbinary" option="Non - binary" /></option>
                    <option value="pangender"><UserOption name="gender" id="pangender" option="Pangender" /></option>
                    <option value="polygender"><UserOption name="gender" id="polygender" option="Polygender" /></option>
                    <option value="trigender"><UserOption name="gender" id="trigender" option="Trigender" /></option>
                    <option value="other"><UserOption name="gender" id="other" option="Other" /></option>
                </select>
            </div>
            <a href="./sexualidentity"><input type="submit" value="Continue" class="btn-disabled mt-10" /></a>
        </form>
    
    );
}