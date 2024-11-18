import { NavBar, FooterBar } from "../components/layout";

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>{children}</main>
      <FooterBar />
    </div>
  );
};
