import { Header } from "./Header";
import { Footer } from "./Footer";
/* import { Sidebar } from "./Sidebar"; */

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
