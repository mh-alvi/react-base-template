import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
        <header>Hello</header>
        <Outlet />
        <footer>Bye</footer>
    </div>
  );
};

export default MainLayout;
