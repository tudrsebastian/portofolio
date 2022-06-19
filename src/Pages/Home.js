import Photo from "../Images/Photo.jpg";
import CSS3logo from "../Images/CSS3logo.png";
import htmllogo from "../Images/htmllogo.png";
import JSlogo from "../Images/JSlogo.png";
import NodeJSlogo from "../Images/NodeJSlogo.png";
import bootstraplogo from "../Images/bootstraplogo.png";
import MUIlogo from "../Images/MUIlogo.png";
import Reactlogo from "../Images/Reactlogo.png";

const Home = () => {
  return (
    <div className="relative">
      <img
        className="scale-150 absolute top-32 left-32 rounded-full"
        src={Photo}
        alt="selfie"
      />
      <h3 className="w-72 absolute top-28 left-64 font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">
        Hello,I'm Sebastian and I am Frontend Developer!
      </h3>
      <p className="w-80 absolute top-44 left-64">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat
        orci ac eleifend dapibus. Suspendisse urna lacus, imperdiet a lectus
        vel, consectetur porta lacus. Integer semper augue sit amet neque
        tempus, nec pellentesque metus semper. Suspendisse lobortis, magna a
        iaculis.
      </p>
      <h4 className="absolute right-44 font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">
        My stack
      </h4>
      <div className="absolute right-14 container  grid grid-cols-3  columns-3 mx-auto h-auto w-80 border-solid border-1 border-slate-500 shadow-2xl ">
        <div className="w-full rounded">
          <img
            className="object-contain h-48 w-14"
            src={htmllogo}
            alt="html5"
          />
        </div>
        <div className="w-full rounded">
          <img className="object-contain h-48 w-16" src={CSS3logo} alt="css3" />
        </div>
        <div className="w-full rounded">
          <img
            className="object-contain h-48 w-28"
            src={JSlogo}
            alt="JavaScript"
          />
        </div>
        <div className="w-full rounded">
          <img
            className="object-contain h-44 w-24"
            src={NodeJSlogo}
            alt="NodeJS"
          />
        </div>
        <div className="w-full rounded">
          <img
            className="object-contain h-48 w-20"
            src={Reactlogo}
            alt="ReactJS"
          />
        </div>
        <div className="w-full rounded">
          <img
            className="object-contain h-48 w-28"
            src={bootstraplogo}
            alt="BootStrap"
          />
        </div>
        <div className="w-full rounded">
          <img
            className="object-contain h-48 w-28"
            src={MUIlogo}
            alt="MaterialUI"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
