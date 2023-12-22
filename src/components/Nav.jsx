import { useState } from "react";

const navElms = [
  { label: "Docs", url: "/" },
  { label: "Articles", url: "/" },
  { label: "Github", url: "/" },
  { label: "Volunteer", url: "/" },
];

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="h-[50px] px-[10px] flex justify-between items-center">
      <img src="/assets/logo.svg" className="w-[95px] h-auto" alt="logo" />
      <div
        className="hidden cursor-pointer max-md:block"
        onClick={handleShowNavbar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          className="w-auto"
          viewBox="0 0 448 512"
        >
          {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> */}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className={`nav-elements bg-zinc-100 ${showNavbar && "active"}`}>
        <div className="flex max-md:flex-col justify-between list-none gap-[24px]">
          {navElms.map((elm) => (
            <a
              className="py-2 m-4 px-5 border border-solid border-black rounded-2xl transition-all hover:scale-110"
              href={elm.url}
            >
              {elm.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
