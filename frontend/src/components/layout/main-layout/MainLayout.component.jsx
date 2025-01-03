import { Outlet } from "react-router-dom";

import Navbar from "../../navbar/navbar.component";

const MainLayout = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <footer className="footer-container">
          <p>Footer content here ...</p>
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
