import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="cursor-pointer flex items-center md:justify-start lg:justify-start justify-between gap-[100px] border-gray-400 py-4 lg:px-[100px] md:px-[100px]">
      <div className="text-[30px] hidden md:flex lg:flex">room</div>
      <nav>
        <section className="MOBILE-MENU px-10 gap-[100px] flex items-center left-0 md:hidden lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <img src="images/icon-hamburger.svg" alt="" />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 left-0 px-8 py-16"
              onClick={() => setIsNavOpen(false)}
            >
              <img src="images/icon-close.svg" alt="" />
            </div>
            <ul className="text-black gap-5 flex flex-row ml-20 lowercase font-bold">
              <li className=" border-gray-400 my-8 hover:underline hover:underline-offset-[10px]">
                <a href="/home">home</a>
              </li>
              <li className=" border-gray-400 my-8 hover:underline hover:underline-offset-[10px]">
                <a href="/shop">shop</a>
              </li>
              <li className=" border-gray-400 my-8 hover:underline hover:underline-offset-[10px]">
                <a href="/about">about</a>
              </li>
              <li className=" border-gray-400 my-8 hover:underline hover:underline-offset-[10px]">
                <a href="/contact">contact</a>
              </li>
            </ul>
          </div>
          <div className="flex text-[30px]  md:hidden lg:hidden">room</div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 md:flex lg:flex ">
          <li className=" border-gray-400 my-8 lowercase hover:underline hover:underline-offset-[10px]">
            <a href="/home">home</a>
          </li>
          <li className=" border-gray-400 my-8 lowercase hover:underline hover:underline-offset-[10px]">
            <a href="/shop">shop</a>
          </li>
          <li className=" border-gray-400 my-8 lowercase hover:underline hover:underline-offset-[10px]">
            <a href="/about">about</a>
          </li>
          <li className=" border-gray-400 my-8 lowercase hover:underline hover:underline-offset-[10px]">
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 20vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
