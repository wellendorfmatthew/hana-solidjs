import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import UserOption from "../components/UserOption";


export default function GenderId() {
    // let text = document.querySelector('.span-opt')?.textContent;
    // const gender = document.querySelector('.lbl')?.textContent;
    const [menuIsOpen, setMenuIsOpen] = createSignal(true);
    // const [update, setUpdate] = createSignal("");
    const navigate = useNavigate();

    function toggleMenu() {
        setMenuIsOpen(!menuIsOpen());
    }

    const updateMenu = () => {
        //when an input is clicked, close menu
        //change the -choose an option- span text into the clicked item text
        setMenuIsOpen(true);
        // setUpdate(update());
    }
    
    function sendDataToDb() {
        //will send the selected user data to the database
    }

    return (
        
        <form onSubmit={sendDataToDb} name="gender" class="section-container">
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

            
            <label for="gender" class="section-subtitle block">Non - binary and more</label>
            <div class="mt-2 w-52">
                <div class="wrapper mb-5">
                    <div class="option rounded-md select-btn mb-2" onClick={toggleMenu}>
                        <span class="span-opt mb-1 bg-[url('./assets/images/caret.svg')] bg-no-repeat bg-[left_9.7rem_top_70%] bg-[length:1rem_1rem] pr-5">Choose an option</span>
                    </div>
                    <div class="absolute z-10 w-[13rem] p-0 rounded-md bg-hana-bg border border-solid border-selection-bg size-32 overflow-hidden" classList={{ "hidden": menuIsOpen() }}>
                        <ul class="options overflow-auto bg-selection-bg bg-opacity-20 h-32 menu" onClick={updateMenu}>
                            <li>
                                <label class="lbl" for="agender">Agender</label>
                                <input type="radio" value="agender" name="gender" id="agender" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="bigender">Bigender</label>
                                <input type="radio" name="gender" id="bigender" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="demiflux">Demiflux</label>
                                <input type="radio" name="gender" id="demiflux" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="demigender">Demigender</label>
                                <input type="radio" name="gender" id="demigender" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="genderfluid">Genderfluid</label>
                                <input type="radio" name="gender" id="genderfluid" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="genderneutral">Genderneutral</label>
                                <input type="radio" name="gender" id="genderneutral" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="genderqueer">Genderqueer</label>
                                <input type="radio" name="gender" id="genderqueer" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="nonbinary">Non - binary</label>
                                <input type="radio" name="gender" id="nonbinary" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="pangender">Pangender</label>
                                <input type="radio" name="gender" id="pangender" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="polygender">Polygender</label>
                                <input type="radio" name="gender" id="polygender" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="trigender">Trigender</label>
                                <input type="radio" name="gender" id="trigender" class="hidden" />
                            </li>
                            <li>
                                <label class="lbl" for="other">Other</label>
                                <input type="radio" name="gender" id="other" class="hidden" />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <label for="select-box" class="section-subtitle block mb-3">Non - binary and more</label>
                <select name="select-box" id="select-box" class="option rounded-full pr-3 focus:outline-none focus:ring-1 focus:ring-selection-bg appearance-none">
                    <option value="choose">Choose an option</option>
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
                    </select> */}
            </div>
            <button type="submit" name="gender" class="btn-primary" onClick={() => navigate("/sexualidentity")}>Continue</button>
        </form>
    
    );
}