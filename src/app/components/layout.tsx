import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FFFB" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
