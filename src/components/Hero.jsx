const Hero = () => {
  return (
    <div className="self-center px-[10px] flex max-md:flex-col-reverse gap-5 max-md:gap-0 mt-28 max-md:max-w-full max-md:mt-10">
      <div className="flex flex-col max-md:mt-10 items-stretch w-9/12 max-md:w-full max-md:ml-0">
        <div className="text-5xl font-medium self-stretch max-md:max-w-full max-md:text-4xl">
          With
          <span className="font-bold text-orange-600">
            {" "}
            Stewardship Fractalization
          </span>
          , we are decentralizing the responsibility of protecting and managing
          our environment.
        </div>
        <div className="text-black text-xl font-medium self-stretch mt-5 max-md:max-w-full">
          Now, everybody can get involved in the decision-making.{" "}
        </div>
        <div className="items-stretch flex gap-4 mt-5 py-3 max-md:justify-center">
          <a
            href="/"
            className="text-xl flex justify-center items-center cursor-pointer font-medium text-white bg-orange-600 py-[10px] px-[26px] rounded-[21px] transition-all hover:scale-110"
          >
            Get started
          </a>
          <a
            href="/"
            className="text-xl flex justify-center items-center cursor-pointer font-medium border border-solid border-black py-[10px] px-[26px] rounded-[21px] transition-all hover:scale-110"
          >
            Gitbook
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center w-3/12 ml-5 max-md:w-full max-md:ml-0">
        <img
          loading="lazy"
          src="/assets/hero.png"
          className="object-contain w-[266px] overflow-hidden max-w-full mt-5 max-md:mt-10"
        />
      </div>
    </div>
  );
};

export default Hero;
