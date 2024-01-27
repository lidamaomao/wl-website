import { useRef } from "react";
import logo from "../assets/logo.png";
import Hero from "./Hero";

const Header = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    (inputRef.current as HTMLInputElement).focus();
    scrollToInput();
  };

  const scrollToInput = () => {
    const inputTop = (inputRef.current as HTMLInputElement).offsetTop;
    const scrollTop = inputTop - 50;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  };

  return (
    <header className="relative overflow-hidden md:w-1280px md:mx-auto md:px-4rem">
      <div className="flex justify-between items-center pr-4">
        <div className="logo">
          <img src={logo} alt="w&l logo" style={{ width: "200px" }} />
        </div>
        <button className="btn" onClick={handleClick}>
          Tracking
        </button>
      </div>
      <Hero inputRef={inputRef} />
    </header>
  );
};

export default Header;
