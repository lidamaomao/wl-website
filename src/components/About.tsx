import { aboutUs } from "../data";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <div className="bg-white py-6">
      <div className="text-center px-[15rem]">
        <h2 className="text-2xl md:text-4xl">Future Expansion</h2>
        <p className="text-[#7D7D7D] my-6">
          We aspire to become an Amazon Delivery Service Provider (DSP) and will
          conduct deliveries in accordance with Amazon’s requirements. This is
          our commitment to providing efficient and reliable services, aligning
          with the logistics standards of the world’s leading e-commerce
          platform. We will go the extra mile to meet the expectations of Amazon
          and other partners, delivering exceptional services to our customers.
        </p>
      </div>
      <ul className="flex flex-wrap justify-around mt-4 w-full px-[4rem]">
        {aboutUs.map((item) => {
          return (
            <li
              className="p-6 pt-10 text-center text-[#717CFF] md:w-[23rem] md:h-[25rem] md:text-start md:shadow-xl mb-6 md:hover:scale-[110%]"
              key={item.icon}
            >
              <AboutItem {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
