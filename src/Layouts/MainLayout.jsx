import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
      return (
            <div className="max-w-[1170px] mx-auto p-4 lg:p-0">
                  <Navbar/>
                  <Outlet/>
            </div>
      );
};

export default MainLayout;