import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-accent-1 relative isolate before:absolute before:blur-[150px] before:w-[322px] before:h-[308px] before:rounded-full before:bg-gradient-3 before:-z-[1]">
      <div className="container pt-[160px] pb-[50px] flex flex-col md:flex-row gap-10 sm:gap-28 justify-center md:justify-between items-center">
        <div className="flex-[1.2]">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
            I am Gerold <br />
            <span className="text-[36px] sm:text-[38px] md:text-[50px] lg:text-[60px] xl:text-[65px] leading-normal sm:leading-tight bg-gradient-4 bg-clip-text text-transparent block">
              Web Developer + <br /> UX Designer
            </span>
          </h1>

          <p className="text-xl w-full max-w-[550px] font-light leading-snug mt-2 sm:mt-5">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
          <button className="flex justify-between items-center gap-5 px-5 py-3 mt-5 font-semibold text-primary border-2 border-primary hover:text-slate-50 rounded-full bg-transparent relative isolate overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-[1] before:w-full before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition before:duration-500 before:bg-primary">
            Download CV <IconDownload />
          </button>
        </div>
        <div className="max-w-[80%] sm:max-w-full flex-[0.8] rounded-[38px] group border-4 border-secondary hover:border-primary relative isolate before:absolute before:inset-0 before:bg-gradient-3 before:-z-[1] before:rounded-full before:blur-[150px] transition duration-300">
          <Image
            className="max-w-full -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"
            src="/me.png"
            alt="me"
            width="475"
            height="510"
          />
        </div>
      </div>
    </section>
  );
}
