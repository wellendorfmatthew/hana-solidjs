import UserOption from "../components/UserOption";

export default function GenderId() {
return (
    <div class="section-container">
        <p class="section-title">Choose your gender</p>

        <p class="section-subtitle">Cisgender Options</p>
        <div class="grid w-[12rem] grid-cols-1 p-1">
            <ul>
                <UserOption option="cis female" rounded={true} />
                <UserOption option="cis male" rounded={true} />
            </ul>        
        </div>

        <p class="section-subtitle">Transgender Options</p>
        <div class="grid w-[10rem] grid-cols-1 p-1">
            <ul>
                <UserOption option="trans female" rounded={true} />
                <UserOption option="trans male" rounded={true} />
            </ul>
        </div>

        <p class="section-subtitle">Non - binary and more</p>
        <div class="relative mt-2">
            <button type="button" class="relative w-full option pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-selection-bg sm:text-sm sm:leading-6">
                <span class="ml-3 block truncate">Choose an option</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                    </svg>
                    </span>
            </button>
            <ul class="hidden dropdown-menu focus: outline-none sm:text-sm">
                <UserOption option="Agender" />
                <UserOption option="Bigender" />
                <UserOption option="Demiflux" />
                <UserOption option="Demigender" />
                <UserOption option="Genderfluid" />
                <UserOption option="Genderneutral" />
                <UserOption option="Genderqueer" />
                <UserOption option="Non - binary" />
                <UserOption option="Pangender" />
                <UserOption option="Polygender" />
                <UserOption option="Trigender" />
                <UserOption option="Other" />
            </ul>
        </div>
        <button class="btn-disabled mt-10">Continue</button>
    </div>
    );
}