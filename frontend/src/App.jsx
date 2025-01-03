import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/main-layout/MainLayout.component";
import PageContainer from "./components/layout/page-container/PageContainer.component";
import HomePageContent from "./pages/home/HomePageContent";
import PostsPageContent from "./pages/posts/PostsPageContent";
import LoginPageContent from "./pages/login/LoginPageContent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <PageContainer
              ContentComponent={<HomePageContent />}
              sectionTitle="Home Section"
              subTitle="Welcome!"
            />
          }
        />
        <Route
          path="/posts"
          element={
            <PageContainer
              ContentComponent={<PostsPageContent />}
              sectionTitle="Articles Section"
              subTitle="Catch up with the latest!"
            />
          }
        />
        <Route
          path="/login"
          element={
            <PageContainer
              ContentComponent={<LoginPageContent />}
              sectionTitle="Login Section"
              subTitle="Enter Your login details"
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
