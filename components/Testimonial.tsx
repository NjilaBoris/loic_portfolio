import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import TextReveal from "./TextReveal";

interface Props {
  name: string;
  company: string;
  role: string;
  quote: string;
  image: string | StaticImport;
  imagePositionY: number;
  className?: string;
}
const Testimonial = ({
  name,
  company,
  image,
  imagePositionY,
  quote,
  role,
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={clsx(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center ",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:col-span-2 md:aspect-[9/10] relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <Image
          src={image}
          alt="name"
          className="size-full object-cover"
          style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <TextReveal>
          <div className="text-3xl mt-8 md:text-5xl lg:text-6xl md:mt-0">
            &ldquo;{quote}&rdquo;
          </div>
        </TextReveal>
        <TextReveal>
          <cite className="mt-4 not-italic md:mt-8 md:text-lg lg:text-xl text-2xl block">
            {name}, {role} at {company}
          </cite>
        </TextReveal>
      </blockquote>
    </div>
  );
};

export default Testimonial;
