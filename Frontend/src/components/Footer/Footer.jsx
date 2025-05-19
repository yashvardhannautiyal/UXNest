import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="px-4 md:px-16 lg:px-28 py-8 mt-10 text-white">
       

        <div className="border-t border-t-gray-400 text-gray-300 mt-4">
          <span className="flex justify-center items-center mt-4 mb-2">
            Copyright
            <FaRegCopyright className="pl-2 pr-2 text-3xl" />
            <p>2024. All Rights Reserved.</p>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
