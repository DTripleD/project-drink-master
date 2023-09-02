import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import { SharedLayoutWrapper } from "./SharedLayout.styled";
import Footer from "../Footer/Footer";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <Header />
      <ThemeToggler />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>

      <Footer />
    </SharedLayoutWrapper>
  );
};
