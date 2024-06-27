import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import UserOption from "../components/UserOption";


export default function GenderId() {
    const [menuIsOpen, setMenuIsOpen] = createSignal(true);
    const navigate = useNavigate();

    function sendDataToDb() {
        //will send the selected user data to the database
    }

    function toggleMenu() {
        setMenuIsOpen(!menuIsOpen());
    }
    
    return (
        
        <form onSubmit={sendDataToDb} class="section-container">
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
                <div class="wrapper mb-5">
                    <div class="option rounded-2xl select-btn" onClick={toggleMenu}>
                        <span class="bg-[url('./assets/images/caret.svg')] bg-no-repeat bg-[left_9.7rem_top_70%] bg-[length:1rem_1rem] pr-5">Choose an option</span>
                    </div>
                    <div class="content absolute z-10 w-[13rem] p-0 mt-2 rounded-2xl bg-hana-bg border border-solid border-selection-bg" classList={{"hidden": menuIsOpen()}}>
                        <ul class="options max-h-[250px] rounded-2xl overflow-y-auto bg-selection-bg bg-opacity-20">
                            <li>
                                <label for="agender">Agender</label>
                                <input type="radio" value="agender" name="gender" id="agender" class="hidden" />
                            </li>
                            <li>
                                <label for="bigender">Bigender</label>
                                <input type="radio" name="gender" id="bigender" class="hidden" />
                            </li>
                            <li>
                                <label for="demiflux">Demiflux</label>
                                <input type="radio" name="gender" id="demiflux" class="hidden" />
                            </li>
                            <li>
                                <label for="demigender">Demigender</label>
                                <input type="radio" name="gender" id="demigender" class="hidden" />
                            </li>
                            <li>
                                <label for="genderfluid">Genderfluid</label>
                                <input type="radio" name="gender" id="genderfluid" class="hidden" />
                            </li>
                            <li>
                                <label for="genderneutral">Genderneutral</label>
                                <input type="radio" name="gender" id="genderneutral" class="hidden" />
                            </li>
                            <li>
                                <label for="genderqueer">Genderqueer</label>
                                <input type="radio" name="gender" id="genderqueer" class="hidden" />
                            </li>
                            <li>
                                <label for="nonbinary">Non - binary</label>
                                <input type="radio" name="gender" id="nonbinary" class="hidden" />
                            </li>
                            <li>
                                <label for="pangender">Pangender</label>
                                <input type="radio" name="gender" id="pangender" class="hidden" />
                            </li>
                            <li>
                                <label for="polygender">Polygender</label>
                                <input type="radio" name="gender" id="polygender" class="hidden" />
                            </li>
                            <li>
                                <label for="trigender">Trigender</label>
                                <input type="radio" name="gender" id="trigender" class="hidden" />
                            </li>
                            <li>
                                <label for="other">Other</label>
                                <input type="radio" name="gender" id="other" class="hidden" />
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
            <input type="submit" value="Continue" class="btn-disabled mt-5" onClick={() => navigate("/sexualidentity")} />
        </form>
    
    );
}