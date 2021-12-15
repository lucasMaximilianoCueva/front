import "./styles/App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import BussinessProfile from "./components/Profiles/JobProfile/BussinessProfile";
import ContactSection from "./components/Sections/ContactSection/ContactSection";
import Dashboard from "./components/Profiles/UserProfile/Dashboard";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import FeaturesSection from "./components/Sections/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import Layout from "./components/Layout/Layout";
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from "./components/Navbar/Navbar";
import Postulaciones from "./components/Profiles/UserProfile/Postulaciones";
import Profile from "./components/Profiles/Profile";
import ProfileData from "./components/Profiles/UserProfile/ProfileData";
import RegisterForm from './components/RegisterForm/RegisterForm';
import { SearchProvider } from "./Context/SearchContext";
import SearchResults from "./components/Search/SearchResults";
import { SocialMediaNav } from "./components/Sections/SocialMedias/SocialMediaNav";
import SuscribeSection from "./components/Sections/SuscribeSection/SuscribeSection";
import TestimonialSection from "./components/Sections/TestimonialSection/TestimonialSection";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";

function App() {
  const {authUser} = useContext(UserContext)

  return (
    <SearchProvider>
      <BrowserRouter>

        <Layout>

          <Navbar />

          <Switch>
          
            <Route exact path="/">
              <Header options={"home"} />
              <FeaturesSection />
              <TestimonialSection />
              <SearchResults />
              <SocialMediaNav />
              <SuscribeSection />
            </Route>

            <Route exact path="/login">
              <LoginForm />
            </Route>

            <Route exact path="/signup">
              <RegisterForm />
            </Route>

            {
              authUser &&
                <>
                    <Route exact path="/dashboard/:id">
                      <Profile>
                        <Dashboard />
                      </Profile>
                    </Route>

                    <Route exact path="/dashboard/:id/perfil">
                      <Profile>
                        <ProfileData />
                      </Profile>
                    </Route>

                    <Route exact path="/dashboard/:id/postulaciones">
                      <Profile>
                        {/* <Postulaciones /> */}
                        <Jobs />
                      </Profile>
                    </Route>

                    <Route exact path="/dashboard/:id/guardado">
                      <Profile>
                      {/* Listado de sus favoritos */}
                      </Profile>
                    </Route>
                </>
            }

            <Route exact path="/jobs/:id">
              <Profile>
                <BussinessProfile />
              </Profile>
            </Route>

            
            <Route path="*">
              <ErrorPage/>
            </Route>

          </Switch>

          <Footer />

        </Layout>

      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
