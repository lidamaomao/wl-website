import employee from "../assets/employee.png";

const Hero = ({
  inputRef,
}: {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  return (
    <>
      <div className="flex flex-col items-center md:w-50% md:items-start md:pt-4rem md:pl-1rem">
        <h2 className="text-2xl text-center md:text-5xl md:text-start">
          Delivering <span className="text-[#717CFF]">Trust</span>, One Mile at
          a Time
        </h2>
        <p className="text-sm text-[#7D7D7D] text-center mt-4 bg-white bg-opacity-50 md:bg-none md:bg-opacity-0 md:text-start md:text-xl md:mt-2rem md:mb-4rem">
          “W&L EXPRESS INC” is a logistics company specializing in the last-mile
          delivery service. We are known for providing exceptional delivery
          experiences, having previously served brands like TEMU and SHEIN, and
          having acted as a Delivery Service Provider (DSP) on platforms such as
          UniUni and SpeedX.
        </p>
        <form action="#" className="flex flex-col">
          <label htmlFor="tracking-id" className="md:text-2xl md:mb-6 mt-2">
            Enter your tracking number
          </label>
          <input
            type="text"
            id="tracking-id"
            ref={inputRef}
            placeholder="E.g. WL1122334455"
            className="b-1 b-solid b-gray py-3 pl-2 rounded-lg md:focus:w-2xl placeholder-gray"
          />
          <button className="btnPrimary mt-4 h-10 md:text-lg md:h-3rem md:mt-6 md:max-w-10rem">
            Tracking →
          </button>
        </form>
      </div>
      <div>
        <div className="circle bottom-0 left-50 z--1 md:left-70%"></div>
        <img
          src={employee}
          alt="employee image"
          className="absolute bottom-0 right-10 h-30rem md:inline-block hidden"
        />
      </div>
    </>
  );
};

export default Hero;
