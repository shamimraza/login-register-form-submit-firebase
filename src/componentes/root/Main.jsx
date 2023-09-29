import { Outlet } from "react-router-dom";
import Heder from "../Heder/Heder";

const Main = () => {
  return (
    <div>
      <Heder></Heder>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
