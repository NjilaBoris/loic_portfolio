"use client";
import Testimonial from "@/components/Testimonial";
import image1 from "@/public/images/testimonial-1.jpg";
import image2 from "@/public/images/testimonial-2.jpg";
import image3 from "@/public/images/testimonial-3.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";

import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Loic's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Loic transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Loic brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end end"],
  });
  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "17%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-17%"]);
  const [testimonialsIndex, setTestimonialsIndex] = useState(0);
  const handleClickPrev = () => {
    setTestimonialsIndex((curr) => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr - 1;
    });
  };
  const handleClickNext = () => {
    setTestimonialsIndex((curr) => {
      if (curr === testimonials.length - 1) {
        return 0;
      }
      return curr + 1;
    });
  };
  return (
    <section className="py-24 md:py-32 lg:py-40" id="testimonials">
      <h2
        className="text-4xl flex md:text-7xl lg:text-8xl flex-col overflow-clip"
        ref={titleRef}
      >
        <motion.span className="whitespace-nowrap" style={{ x: transformTop }}>
          Some nice words from my past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-orange-500"
          style={{ x: transformBottom }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20 pl-5">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialsIndex && (
                  <Testimonial
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                    key={name}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        <div className="pl-5 flex gap-4 mt-6 lg:mt-10">
          <button
            onClick={handleClickPrev}
            className="border border-stone-400 size-11 inline-flex items-center
             justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleClickNext}
            className="border border-stone-400 hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300 size-11 inline-flex items-center justify-center rounded-full"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
