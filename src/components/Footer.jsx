import React from "react";

const footerLinks = [
  "/assets/footer/insta.svg",
  "/assets/footer/facebook.svg",
  "/assets/footer/linkedin.svg",
  "/assets/footer/youtube.svg",
  "/assets/footer/gmail.svg",
];

const company = [
  {
    label: "The Team",
    url: "/",
  },
  {
    label: "Contact",
    url: "/",
  },
];
const links = [
  {
    label: "Volunteer",
    url: "/",
  },
  {
    label: "Github",
    url: "/",
  },
  {
    label: "Gitbook",
    url: "/",
  },
];

const Footer = () => {
  return (
    <div className="flex w-full container justify-between gap-5 mt-28 px-5 pb-10 items-start max-md:max-w-full max-md:flex-wrap max-md:my-10 max-sm:flex-col">
      <div className="text-stone-600 font-black max-md:text-4xl">
        <img src="/assets/logo.svg" className="w-[172px]" alt="logo" />
      </div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="flex flex-col max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch flex flex-col gap-1">
            <div className="text-slate-800 text-sm font-bold tracking-[2px] uppercase whitespace-nowrap">
              company
            </div>
            {company.map((link) => (
              <a
                href={link.url}
                className="text-neutral-800 text-xl leading-7 whitespace-nowrap mt-2 transition-all ease-in-out hover:translate-x-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch flex flex-col gap-1">
            <a
              href=""
              className="text-slate-800 text-sm font-bold tracking-[2px] uppercase whitespace-nowrap"
            >
              Links
            </a>
            {links.map((link) => (
              <a
                href={link.url}
                className="text-neutral-800 text-xl leading-7 whitespace-nowrap mt-2 transition-all ease-in-out hover:translate-x-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="items-stretch flex flex-col gap-1">
          <div className="text-slate-800 text-sm font-bold tracking-[2px] uppercase whitespace-nowrap">
            Socials
          </div>
          <div className="items-stretch flex gap-4 mt-2 max-md:justify-center">
            {footerLinks.map((link) => (
              <a href="">
                <img
                  src={link}
                  className="aspect-[1.07] object-contain object-center w-[30px] transition-all hover:scale-110 overflow-hidden shrink-0 max-w-full self-start"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
