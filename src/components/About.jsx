import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-md md:text-xl mt-10 md:mt-20">
          Hello, I'm Shrikrishna Patil, a devoted MERN Full Stack Developer. I
          began my tech journey with BCA from Bill Gates College of Computer
          Science and later pursued an MCA from JSPM's JIBS in Pune. Proficient
          in React, HTML/CSS, Tailwind CSS, JavaScript, Git. my focus is on
          creating seamless user experiences using the MERN stack — MongoDB,
          Express JS, React, and Node JS.
        </p>
        <p className="text-md md:text-xl my-4">
          I've transitioned from crafting static websites at Gatitaa IT
          Solutions to contributing to quality assurance at Wipro. Subsequently,
          I joined Sham Computer Institute in Osmanabad, empowering students
          with essential computer skills. Beyond coding, I'm an avid reader.
        </p>
        <p className="text-md md:text-xl">
          Today, I'm eager to apply my full-stack expertise to innovate and
          build cutting-edge web applications. If you're seeking a dedicated
          MERN Full Stack Developer to elevate your projects, let's connect and
          explore how I can contribute. Thank you for visiting my portfolio, and
          I'm excited to collaborate with like-minded professionals who share a
          passion for technology and innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
