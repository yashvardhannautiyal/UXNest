import { useNavigate } from "react-router-dom";
const HeroSection = ()=>{

    const navigate = useNavigate();
    const handleGetStartedBtn = () =>{
        navigate("/editor");
    }
    return (
        <>
        <div className="main-container text-purple-100">
        <div className="md:flex md:justify-center md:p-5 mt-5">
        <div className="md:text-8xl text-5xl font-medium p-3">        
        <p className="md:text-center">Build Better, Compile Faster.</p>
        </div>
        </div>
        <div className="md:font-normal font-medium md:text-lg w-auto flex md:text-center pb-2 md:justify-center">
            <p className="p-3 md:w-2/3">UXNest is a powerful, intuitive code editor to revolutionize your development workflow with our front-end compiler. Fast, efficient, and powerful. Transform your code into flawless applications with zero hassle.</p>
        </div>
        <div className="flex md:justify-center md:pl-0">        
        <button className="bg-purple-600 text-white rounded-lg m-1 p-1  font-medium lg:w-1/4 md:w-2/3 w-full hover:bg-purple-500 transition delay-2000 duration-300"
        onClick={handleGetStartedBtn}>Get Started</button>
        </div>

        <div className="md:p-4 mt-16">
            <p className="md:text-6xl text-4xl font-medium md:p-9 md:m-6 md:text-center p-3">Compile Like a Pro, Code Like a Boss.</p>
        </div>
        </div>
        </>
    )
}
export default HeroSection;