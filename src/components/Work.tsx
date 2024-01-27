import { companyList } from "../data";

const Work = () => {
  return (
    <div className="py-4 bg-[#FAFAFA] w-full md:min-h-200px">
      <h2 className="text-center text-[#808080] text-5 my-4 md:text-4xl">
        Who we work for
      </h2>
      <ul className="flex justify-around md: mt-8">
        {companyList.map((company) => {
          return (
            <li key={company.name} className="w-[10rem]">
              <img src={company.logo} alt={company.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Work;
