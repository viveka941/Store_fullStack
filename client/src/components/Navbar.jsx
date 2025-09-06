import React, { useEffect, useState } from "react";

function Navbar() {
  const[theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme") :"light")
  const element=document.documentElement
  useEffect(()=>{
    if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark")
      document.body.classList.add("dark");
    }
    else{
            element.classList.remove("dark");
      localStorage.setItem("theme","light")
      document.body.classList.remove("dark");
    }
  },[]);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const navItems = (
   <>
      <li className=" hover:bg-black hover:text-white"><a href="/" >Home</a></li>
      <li className=" hover:bg-black hover:text-white"><a href="/course">Course</a></li>
      <li className=" hover:bg-black hover:text-white"><a href="/contact">Contact</a></li>
      <li className=" hover:bg-black hover:text-white"><a href="/about">About</a></li>
  </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50  transition-all duration-300 ease-in-out ${
          sticky ? "bg-gray-200 shadow-md" : "bg-white"
        }`}
      >
        {/* Navbar */}
        <div className="flex items-center justify-between py-3">
          {/* Left side (logo + menu) */}
          <div className="flex items-center space-x-4">
            {/* Dropdown */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost text-black">
                {/* hamburger */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2 shadow cursor-pointer"
              >
                {navItems}
              </ul>
            </div>

            {/* Logo */}
            <a
              className={`text-2xl font-bold cursor-pointer text-black transform transition-transform duration-300 ${
                sticky ? "scale-75" : "scale-100"
              }`}
            >
              Bookstore
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-6 text-black">{navItems}</ul>
            </div>

            {/* Search */}
            <div className="hidden md:block">
              <label className="input flex items-center gap-2 border rounded-lg px-2 py-1 bg-gray-50">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  required
                  placeholder="Search"
                  className="bg-transparent outline-none text-black"
                />
              </label>
            </div>

            {/* Theme toggle + Login */}
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value="synthwave"
                className="theme-controller"
              />
              {/* sun */}
              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                onClick={()=>setTheme(theme==="light"?"dark":"light")}
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              {/* moon */}
              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                onClick={()=>setTheme(theme==="dark"?"light":"dark")}
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>

            <a className="btn bg-blue-600 text-white hover:bg-slate-800 duration-300 cursor-pointer">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Auto Spacer for navbar height */}
      <div className="pt-[64px] md:pt-[72px]"></div>
    </>
  );
}

export default Navbar;
