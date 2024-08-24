import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
export const FadeUp = (delay: number) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Banner = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-white overflow-hidden">
      <Carousel className="w-full  ">
        <CarouselContent>
          {Array.from({ length: 2 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="border-none">
                  <CardContent className="font-poppins">
                    <div className="container lg:px-0 grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                      {/* textcontent */}
                      <div className="flex flex-col gap-10 mt-10 md:mt-0 justify-center md:py-0">
                        <motion.div
                          variants={FadeUp(0.6)}
                          initial="initial"
                          animate="animate"
                          className="text-center md:text-left lg:max-w-[2000px]"
                        >
                          <h1 className="text-[#AD9271] font-playfair-display text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-thin">
                            Create the Perfect Business Setting
                          </h1>
                          <p className="text-gray-400 text-justify text-sm pt-10 lg:max-w-[550px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam sit amet blandit augue, nec auctor
                            justo. Nulla et imperdiet arcu. Pellentesque{" "}
                          </p>
                        </motion.div>
                        <motion.div
                          variants={FadeUp(0.8)}
                          initial="initial"
                          animate="animate"
                          className="flex justify-center md:justify-start"
                          onClick={() => setOpen(true)}
                        >
                          <button className=" flex items-center justify-center gap-5 font-playfair-display border border-[#AD9271] text-[#AD9271] font-thin text-xl py-3 px-4 group ">
                            <img src="/Group 15.png" alt="" />
                            <span>Discover</span>
                            <img
                              className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300"
                              src="/Group 1.png"
                              alt=""
                            />
                          </button>
                        </motion.div>
                      </div>

                      {/* imagecontent */}
                      <div className="flex justify-center items-center">
                        <motion.img
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeInOut",
                          }}
                          src="pngegg.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Banner;
