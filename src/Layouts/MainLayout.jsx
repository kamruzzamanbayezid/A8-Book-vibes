import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
      return (
            <div>
                  <div className="max-w-[1170px] mx-auto p-4 lg:p-0">
                        <Navbar />
                        <Outlet />

                  </div>
                  <Footer />
            </div>
      );
};

export default MainLayout;