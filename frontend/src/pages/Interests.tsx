import { Setter, Signal, createSignal } from "solid-js";
import { useNavigate } from '@solidjs/router';

export default function Interests() {
    const navigate = useNavigate();
    const interestsList = ["LGBTQIA+ Rights", "Working Out", "Anime", "Dancing", "Sports", "Drawing", "Music", "Skydiving", "Climbing",
                           "Animals", "Environmentalism", "Politics", "Food", "Fishing", "Comedy", "Astrology", "Science", "Reading",
                           "Climate Change", "Equality", "Photography", "Walking", "Weightlifting", "Vlogging", "Streaming",
                           "Content Creation", "Volunteering", "Alcohol", "Shopping", "Outdoors", "Yoga", "Blogging", "Swimming",
                           "Basketball", "Baseball", "Hockey", "Football", "Soccer", "Esports", "Programming", "Fashion", "Languages",
                           "Board Games", "Video Games", "Makeup", "Graphic Design", "Art", "Writing", "Clubs", "Theater", "Acting",
                           "Karaoke", "Rap", "Hip Hop", "Rock", "Pop", "Country", "Classical", "EDM", "Kpop", "Jpop", "Vtubers",
                           "Hiking", "Beaches", "Camping", "TV", "Netflix", "Youtube", "Twitch", "Manga", "Drag"
                          ];
    const [userInterests, setUserInterests] = createSignal<string[]>([]);

    const handleInterest = (interest : string) => {
        setUserInterests((prev) => {
            if (prev.includes(interest)) {
                return prev.filter((i) => i !== interest);
            }

            return [...prev, interest];
        })
    }

    return (
        <div class="section-container gap-32">
            <p class="section-title">What are your interests?</p>
            <div class="flex justify-center flex-wrap gap-4 h-1/3 w-5/6 overflow-auto">
                {
                    interestsList.map((interest, index) => ( // Might end up making this it's own component later on, depends on if another page needs similar functionality
                        <button 
                            class={`border-2 rounded-full flex justify-center items-center px-6 py-2
                                ${userInterests().includes(interest)
                                    ? "bg-green-neon border-green-neon text-interest-dark"
                                    : "bg-interest-dark border-green-neon  text-green-300"
                                }`}
                            onclick={() => handleInterest(interest)}
                        >
                            {interest}
                        </button>
                    ))
                }
            </div>
            <button class='btn-primary' onClick={() => navigate("/otp")}>
                Continue
            </button>
        </div>
    )
}