import { createSignal } from "solid-js";
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
    const [userInterests, setUserInterests] = createSignal([]);

    return (
        <div class="section-container gap-32">
            <p class="section-title">What are your interests?</p>
            <div class="flex justify-center flex-wrap gap-4 h-[200px] w-[320px] overflow-auto">
                {
                    interestsList.map((interest, index) => (
                        <button 
                            class="border-2 rounded-full border-green-500 flex justify-center items-center bg-green-950 text-green-500 bg-opacity-10 px-6 py-2"
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