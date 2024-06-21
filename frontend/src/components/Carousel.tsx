import createEmblaCarousel from "embla-carousel-solid";
import { createSignal, onMount } from "solid-js";
import { ArrowLeft, ArrowRight } from "./ui/Icons";

interface slide {
  alt: string;
  text: string;
  image: string;
}

interface slides {
  slides: slide[];
}

export function Carousel({ slides }: slides) {
  const [emblaRef, emblaApi] = createEmblaCarousel();
  const [activeIndex, setActiveIndex] = createSignal(0);

  onMount(() => {
    const api = emblaApi();
    if (api) {
      api.on("select", () => {
        const number = api.selectedScrollSnap;
        setActiveIndex(number);
      });
    }
  });

  const scrollPrev = () => {
    const api = emblaApi();
    if (api) {
      api.scrollPrev();
      console.log(api.slidesInView());
    }
  };

  const scrollNext = () => {
    const api = emblaApi();
    if (api) {
      api.scrollNext();
      console.log(api.slidesInView());
    }
  };

  return (
    <div class="embla h-[97%] w-[90%]" ref={emblaRef}>
      <div class="embla__container">
        {slides.map((slide) => (
          <div class="embla__slide flex flex-col gap-6 justify-evenly items-center">
            <p class="font-hana-text text-white text-4xl text-balance">
              {slide.text}
            </p>
            <img
              src={slide.image}
              alt={slide.alt}
              class="embla__image rounded-lg h-[60vh] bigPhone:h-[70vh] max-w-[85%] object-cover"
            />
          </div>
        ))}
      </div>
      <div class="flex justify-around text-white">
        <button class="embla__prev" onClick={scrollPrev}>
          <ArrowLeft />
        </button>
        <div>
          {slides.map((_, index) => (
            <button
              class={`embla__dot ${activeIndex() === index ? "active" : ""}`}
              onClick={() => emblaApi()?.scrollTo(index)}
            ></button>
          ))}
        </div>
        <button class="embla__next" onClick={scrollNext}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
