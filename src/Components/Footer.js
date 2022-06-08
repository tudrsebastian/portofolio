import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="h-32 bg-cover bg-gradient-to-r  from-blue-700 to-slate-500 fixed bottom-0 w-full">
        <div className="relative top-12 flex flex-row justify-center gap-12">
          <button
            className="bg-sky rounded-full "
            href="https://www.facebook.com/tudorasebastian.0796"
          >
            <FaFacebook size={45} color="white" />
          </button>
          <button href="https://www.instagram.com/sebastiantudora/">
            <FaInstagram size={45} color="purple" />
          </button>
          <button href="https://github.com/tudrsebastian">
            <FaGithub size={45} color="black" />
          </button>
          <button href="https://twitter.com/SebaTdr96">
            <FaTwitter size={45} color="white" />
          </button>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
