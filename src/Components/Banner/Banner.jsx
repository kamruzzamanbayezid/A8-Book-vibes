import { Link } from "react-router-dom";
import CommonBtn from "../../Shared/CommonBtn";

const Banner = () => {
      return (
            <div className="hero py-10 lg:py-16 bg-[#1313130d] rounded-3xl">
                  <div className="hero-content flex flex-col lg:flex-row gap-10 lg:gap-0">
                        <div className="lg:w-3/5 lg:ml-24 flex flex-col justify-center items-center lg:items-start">
                              <h1 className="text-[56px] text-[#131313] font-bold font-playfair leading-[84px] mb-10 text-center lg:text-start">Books to freshen up your bookshelf</h1>
                              <Link to='/listedBooks'>
                                    <CommonBtn title='View The List' />
                              </Link>
                        </div>
                        <div className="lg:w-2/5">
                              <img src="https://i.ibb.co/5M4LRzm/pngwing-1.png" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Banner;