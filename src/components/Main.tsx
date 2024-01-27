import About from "./About";
import Contact from "./Contact";
import Work from "./Work";

const Main = () => {
  return (
    <main className="flex flex-col items-center">
      <Work />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
