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
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          molestias repudiandae repellendus asperiores, temporibus ad beatae! Ad
          at asperiores sapiente? Dignissimos laudantium quisquam ex nostrum est
          excepturi vero unde incidunt?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          asperiores explicabo nemo itaque corrupti quo eum assumenda maiores,
          eos suscipit ab dignissimos unde vitae nostrum vero iusto, ad
          deleniti. Iusto? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Necessitatibus, odit totam ad error veritatis dolor recusandae
          aut velit rem harum sequi repellendus repudiandae sunt iste molestias
          qui, illum doloremque autem?
        </p>
      </div>
    </div>
  );
};

export default About;
