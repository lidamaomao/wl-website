import Logo from "../assets/logo.svg?react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#717CFF] text-white pb-4">
      <div className="logo">
        <Logo fill="white" width={200} height={100} />
      </div>
      <p className="">address</p>
      <p className="text-[##ecf0f1] mt-4">© 2024 ldm</p>
    </footer>
  );
};

export default Footer;
