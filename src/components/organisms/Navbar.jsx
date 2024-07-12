import { FaBell } from "react-icons/fa";
import AtomButton from "../atoms/button/AtomButton";
import Search from "../molecules/Search";
import Logout from "../molecules/Logout";
function Navbar() {
  return (
    <nav className="px-4 py-3 flex justify-between float-right ">
      <div className="flex items-center gap-x-5 ">
        <Search />
        <div className="text-white">
          <AtomButton ariaLabel="Notifications">
            <FaBell className="w-6 h-6" />
          </AtomButton>
        </div>
        <div className="text-white">
          <Logout />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
