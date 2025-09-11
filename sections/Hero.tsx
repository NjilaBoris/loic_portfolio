"use client";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Button from "@/components/Button";
import Image from "next/image";
import SplitType from "split-type";
import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import TextReveal from "@/components/TextReveal";

const Hero = () => {
  const [titleScope, titleAnimate] = useAnimate();
  // useEffect(() => {
  //   new SplitType(titleScope.current, {
  //     types: "lines,words",
  //     tagName: "span",
  //   });
  //   titleAnimate(
  //     titleScope.current.querySelectorAll(".word"),
  //     { transform: "translateY(0%)" },
  //     { duration: 0.5, delay: stagger(0.2) }
  //   );
  // }, [titleScope, titleAnimate]);
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-dvh items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full px-[2rem]">
            <TextReveal>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl lg:leading-[65px] md:text-6xl md:text-wrap lg:text-7xl mt-40 md:mt-0"
              >
                Crafting digital experiences through code and creative design to
                bring ideas to life.
              </motion.h1>
            </TextReveal>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 1.75,
                }}
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-clip size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>View My Work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 2.2,
                }}
              >
                <Button variant="tertiary" className="!no-underline">
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              src="/images/heroLogo.png"
              alt="Hero"
              width={400}
              height={500}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
