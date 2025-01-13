import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleGetStartedBtn = () => {
    navigate("/editor");
  };
  return (
    <>
      {/* section 1 */}
      <div className="main-container text-purple-100">
        <div className="md:flex md:justify-center md:p-5 mt-5">
          <div className="md:text-8xl text-5xl font-medium p-3">
            <p className="md:text-center">Build Better, Compile Faster.</p>
          </div>
        </div>
        <div className="font-normal md:text-lg w-auto flex md:text-center pb-2 md:justify-center">
          <p className="p-3 md:w-2/3">
            UXNest is a powerful, intuitive code editor to revolutionize your
            development workflow with our front-end compiler. Fast, efficient,
            and powerful. Transform your code into flawless applications with
            zero hassle.
          </p>
        </div>
        <div className="flex md:justify-center md:pl-0">
          <button
            className="bg-purple-600 text-white rounded-md m-3 p-2  font-medium lg:w-1/4 md:w-2/3 w-full hover:bg-purple-500 transition delay-2000 duration-300"
            onClick={handleGetStartedBtn}
          >
            Get Started
          </button>
        </div>


        {/* section 2 */}
        <div className="md:p-4 mt-10">
          <p className="flex justify-center md:text-6xl text-3xl font-medium md:p-9 md:m-6 md:text-center p-3">
            Compile Like a Pro, Code Like a Boss.
          </p>

          <div className="bg-black bg-opacity-35 rounded-lg md:flex items-center justify-center lg:p-9 p-3">
            <div className="flex justify-center lg:p-4">
            {/* html-logo  */}
            <div className="lg:p-5 xs:p-3">
            <img src="/Images/htmlLogo.png" alt="htmlLogo" className="md:h-28 h-20" />
            </div>
            {/* css-logo  */}
            <div className="lg:p-5 xs:p-3">
            <img src="/Images/cssLogo.png" alt="cssLogo" className="md:h-28 h-20"/>
            </div>
            {/* js-logo  */}
            <div className="lg:p-5 xs:p-3">
            <img src="/Images/jsLogo.png" alt="jsLogo" className="md:h-28 h-20 p-1"/>
            </div>
            </div>

            <div className="md:w-3/5">
                <h1 className="font-extrabold md:text-3xl text-lg lg:w-2/3">
                Bring Your Vision to Life – Transform Ideas into Stunning Front-End Experiences!
                </h1>
                <p className="sm:text-lg sm:font-medium mt-2 ">Turn your ideas into beautiful, engaging front-end designs that captivate and connect with your audience. Bring your vision to life with stunning, user-friendly web experiences!</p>
            </div>
          </div>
        </div>




      </div>
    </>
  );
};
export default HeroSection;