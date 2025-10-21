import Header from "@/widgets/header/ui/header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
