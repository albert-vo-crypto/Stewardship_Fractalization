import React from "react";

const Description = () => {
  return (
    <div className="flex-col px-[10px] relative overflow-hidden flex min-h-[773px] w-full justify-center items-center mt-24 max-md:mt-10">
      <img
        src="/assets/desc-mask.png"
        className="absolute h-full w-full object-cover"
      />
      <div className="relative flex  max-w-full flex-col justify-center items-center mt-28 mb-24 max-md:my-10">
        <div className="text-white text-4xl font-medium self-center max-md:max-w-full">
          What is Steward fractalization?
        </div>
        <div className="text-white text-center text-xl max-w-[710px] max-md:text-sm font-medium justify-center items-stretch backdrop-blur-[2px] bg-orange-300 bg-opacity-30 mt-14 px-6 py-8 rounded-2xl leading-[1.75em] max-md:mt-10 max-md:px-5">
          In the context of environmental stewardship, fractalization can be
          seen as a way to distribute the responsibility of protecting and
          managing natural resources across different stakeholders. Instead of
          relying solely on centralized authorities or organizations,
          stewardship fractalization encourages the involvement of local
          communities, individuals, and smaller groups in the decision-making
          and implementation of sustainable practices.
        </div>
        <a
          href="/"
          className="text-xl mt-12 w-fit flex justify-center items-center cursor-pointer font-medium text-white bg-orange-600 py-[10px] px-[26px] rounded-[21px] transition-all hover:scale-110"
        >
          Open App
        </a>
      </div>
    </div>
  );
};

export default Description;
