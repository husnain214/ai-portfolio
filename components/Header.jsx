"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { navLinks } from "@/constants";
import { desktopNavVars, mobileNavVars } from "@/motion";
import Hamburger from "hamburger-react";

export default function Header() {
  const { scrollY } = useScroll();
  const [desktopShow, setDesktopShow] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > 100) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    if (latest > previous && latest > 150) {
      setDesktopShow(true);
    } else setDesktopShow(false);
  });

  return (
    <>
      <motion.header
        variants={mobileShow ? {} : desktopNavVars}
        animate={desktopShow ? "hidden" : "visible"}
        className={`fixed top-0 w-full py-5 z-30 ${
          isDark ? "bg-accent-1" : "bg-transparent"
        }`}
      >
        <nav>
          <div className="container flex justify-between items-center relative z-20">
            <Link
              href="/"
              className="uppercase highlight-text font-bold text-xl md:text-2xl"
            >
              Talha
            </Link>
            <ul className="hidden sm:flex justify-between items-center gap-8 font-medium text-[15px]">
              {navLinks.map((navLink, index) => (
                <li
                  key={navLink.title + index}
                  className="nav-link relative before:absolute before:-bottom-[4px] before:right-0 hover:before:right-auto hover:before:left-0 before:w-0 hover:before:w-full before:bg-gradient-1 before:h-[2px] before:rounded-[4px] before:transition-all before:duration-300 before:ease-in-out"
                >
                  <Link href={navLink.href}>{navLink.title}</Link>
                </li>
              ))}
            </ul>
            <Link
              href=""
              className="cta-button hidden sm:flex bg-gradient-2 font-bold capitalize rounded-full px-9 py-2 transition-all duration-300"
            >
              Hire me
            </Link>

            <div className="sm:hidden">
              <Hamburger
                label="toggle navigation"
                toggled={mobileShow}
                toggle={setMobileShow}
              />
            </div>
          </div>

          <AnimatePresence>
            {mobileShow && (
              <motion.div
                variants={mobileNavVars.menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 z-10 w-full h-screen origin-top bg-secondary text-slate-50 p-10"
              >
                <div className="flex h-full flex-col">
                  <motion.div
                    variants={mobileNavVars.containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center items-center gap-4 "
                  >
                    {navLinks.map((link, index) => (
                      <MobileLink link={link} key={link.title + index} />
                    ))}
                    <MobileLink
                      link={{ title: "Hire me", href: "" }}
                      style="cta-button"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}

function MobileLink({ link, style }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={mobileNavVars.linkVars}
        className="text-3xl uppercase overflow-hidden"
      >
        <Link
          href={link.href}
          className={
            style === "cta-button"
              ? "cta-button flex bg-gradient-2 font-bold capitalize rounded-full px-9 py-2 transition-all duration-300"
              : ""
          }
        >
          {link.title}
        </Link>
      </motion.div>
    </div>
  );
}
