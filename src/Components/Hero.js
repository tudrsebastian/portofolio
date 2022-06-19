import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className=" relative h-80 bg-cover bg-gradient-to-r  from-blue-700 to-slate-500">
      <h1 className="absolute top-16 left-72 w-96 font-medium leading-tight text-5xl mt-0 mb-2 text-slate-50 ">
        Welcome to my Portofolio Website
      </h1>
      <Navbar />
    </div>
  );
};

export default Hero;
