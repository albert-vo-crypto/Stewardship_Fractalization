import React from "react";

const Collaborate = () => {
  return (
    <div className="bg-slate-400  w-full mt-32 max-md:max-w-full max-md:mt-10 flex justify-center">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 container">
        <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch flex flex-col my-auto px-4 py-1.5 max-md:max-w-full max-md:mt-10">
            <div className="text-white text-4xl font-extrabold max-md:max-w-full">
              Seamlessly collaborate with other organisations solving the same
              problems as you.
            </div>
            <div className="text-slate-600 text-base font-medium mt-6 max-md:max-w-full">
              Achieve your goals faster when you don’t have to wait on larger
              authorities for decision-making.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a2472816130e9591f8cfbd806e15655c6429ded59d7c9031a7cd0c1bcbdf0abc?apiKey=1049abc3c3594b2d906ee110a2fe4523&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2472816130e9591f8cfbd806e15655c6429ded59d7c9031a7cd0c1bcbdf0abc?apiKey=1049abc3c3594b2d906ee110a2fe4523&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2472816130e9591f8cfbd806e15655c6429ded59d7c9031a7cd0c1bcbdf0abc?apiKey=1049abc3c3594b2d906ee110a2fe4523&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2472816130e9591f8cfbd806e15655c6429ded59d7c9031a7cd0c1bcbdf0abc?apiKey=1049abc3c3594b2d906ee110a2fe4523&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2472816130e9591f8cfbd806e15655c6429ded59d7c9031a7cd0c1bcbdf0abc?apiKey=1049abc3c3594b2d906ee110a2fe4523&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2472816130e9591f8cfbd806e15655c6429ded59d7c9031a7cd0c1bcbdf0abc?apiKey=1049abc3c3594b2d906ee110a2fe4523&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2472816130e9591f8cfbd806e15655c6429ded59d7c9031a7cd0c1bcbdf0abc?apiKey=1049abc3c3594b2d906ee110a2fe4523&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2472816130e9591f8cfbd806e15655c6429ded59d7c9031a7cd0c1bcbdf0abc?apiKey=1049abc3c3594b2d906ee110a2fe4523&"
            className="aspect-[1.03] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
