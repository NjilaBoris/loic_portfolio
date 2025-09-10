import image1 from "@/public/images/testimonial-1.jpg";
import image2 from "@/public/images/testimonial-2.jpg";
import image3 from "@/public/images/testimonial-3.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials = () => {
  const testimonialsIndex = 0;
  return (
    <section className="py-24 md:py-32 lg:py-40" id="testimonials">
      <h2 className="text-4xl flex md:text-7xl lg:text-8xl flex-col overflow-clip">
        <span className="whitespace-nowrap">
          Some nice words from my past clients
        </span>
        <span className="whitespace-nowrap self-end text-orange-500">
          Some nice words from my past clients
        </span>
      </h2>
      <div className="container">
        <div className="mt-20 pl-5">
          {testimonials.map(
            ({ name, company, role, quote, image, imagePositionY }, index) =>
              index === testimonialsIndex && (
                <div
                  key={name}
                  className="grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center"
                >
                  <div className="aspect-square md:col-span-2 md:aspect-[9/10]">
                    <Image
                      src={image}
                      alt="name"
                      className="size-full object-cover"
                      style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
                    />
                  </div>
                  <blockquote className="md:col-span-3">
                    <div className="text-3xl mt-8 md:text-5xl lg:text-6xl md:mt-0">
                      &ldquo;{quote}&rdquo;
                    </div>
                    <cite className="mt-4 not-italic md:mt-8 md:text-lg lg:text-xl text-2xl block">
                      {name}, {role} at {company}
                    </cite>
                  </blockquote>
                </div>
              )
          )}
        </div>
        <div className="pl-5 flex gap-4 mt-6 lg:mt-10">
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
            <ArrowLeft />
          </button>
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
