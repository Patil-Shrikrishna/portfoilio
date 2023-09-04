import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SocialLinks from "./SocialLinks";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex pt-10 md:pt-0 flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 text-xl py-4 max-w-md">
            "I'm a dedicated MERN Full Stack Developer with a foundation in
            Computer Applications. My expertise lies in leveraging the MERN
            stack to create dynamic and user-friendly web applications.
            Proficient in React JS, MongoDB, Express JS, Node JS, HTML/CSS,
            Tailwind CSS JavaScript, and Git, I'm committed to adhering to
            industry best practices and delivering exceptional user
            experiences."
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1 " />
              </span>
            </Link>
          </div>
        </div>
        <div className="pb-14 md:py-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/4 md:w-full"
          />
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Home;
