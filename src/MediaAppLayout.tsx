import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";

export default function MediaAppLayout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
