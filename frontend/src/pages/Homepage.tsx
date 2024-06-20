import { Carousel } from "../components/Carousel";
import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpeg";
import carousel3 from "../assets/images/carousel3.jpeg";

const homeSlides = [
  {
    alt: "Rainbow wall",
    text: "Connect with other members of the LGBTQIA+ community in a safe space.",
    image: carousel1,
  },
  {
    alt: "puzzle pieces",
    text: "Get personalized resources that will help you discover more about yourself.",
    image: carousel2,
  },
  {
    alt: "Hand holding heart",
    text: "Find information on mental health support.",
    image: carousel3,
  },
];

export default function Homepage() {
    return (
        <div class="section-container">
            <Carousel slides={homeSlides} />
        </div>
    )
 }