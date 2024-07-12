import Sidebar from "../../components/organisms/Sidebar";
import Navbar from "../../components/organisms/Navbar";

function Template({ children }) {
  return (
    <div>
      <div className="bg-secondary grid items-center justify-between auto-cols-auto grid-cols-2">
        <Sidebar />
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Template;
