import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import { SharedLayoutWrapper } from "./SharedLayout.styled";
import Footer from "../Footer/Footer";
import Background from "../../components/Background/Background";

export const SharedLayout = () => {
  return (
    <Background>
    <SharedLayoutWrapper>
      <Header />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>

      <Footer />
    </SharedLayoutWrapper>
    </Background>
  );
};
