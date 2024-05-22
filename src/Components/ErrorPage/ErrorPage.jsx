import { Link } from "react-router-dom";

const ErrorPage = () => {
      return (
            <div className="flex justify-center items-center h-screen">
                  <div>
                        <h1 className="text-8xl font-bold font-playfair">Oopps!! Sorry...</h1>
                        <h2 className="mt-4 text-5xl font-bold font-playfair">The Page Not found</h2>
                        <Link to='/' className="relative inline-block px-4 py-2 font-medium group mt-8">
                              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                              <span className="relative text-black group-hover:text-white">Go back to home page 🏠</span>
                        </Link>
                  </div>
            </div>
      );
};

export default ErrorPage;