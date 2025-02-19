import { Outlet } from "react-router";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";

export default function MediaAppLayout() {
  return (
  <div>
    <GlobalStyle />
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
  )
}
