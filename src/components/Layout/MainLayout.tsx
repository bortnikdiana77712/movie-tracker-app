import { Outlet } from "react-router";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./MainLayout.css";

export const MainLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
