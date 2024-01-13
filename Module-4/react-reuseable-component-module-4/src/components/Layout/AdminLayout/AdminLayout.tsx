import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Container from "../../ui/Container/Container";

const AdminLayout = () => {
  return (
    <Container>
      <div className="flex">
        <div className="flex-[1]">
          <Sidebar />
        </div>
        <div className="flex-[6]">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
