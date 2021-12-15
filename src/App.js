import './styles/App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutSection from './components/Sections/AboutSection/AboutSection';
import BlogHome from './components/Blog/BlogHome/BlogHome';
import BussinessProfile from './components/Profiles/JobProfile/BussinessProfile';
import Dashboard from './components/Profiles/UserProfile/Dashboard';
import FeaturesSection from './components/Sections/FeaturesSection/FeaturesSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderAbout from './components/Header/HeaderAbout';
import Layout from './components/Layout/Layout';
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profiles/Profile';
import ProfileData from './components/Profiles/UserProfile/ProfileData';
import RegisterForm from './components/RegisterForm/RegisterForm';
import SearchResults from './components/Search/SearchResults';
import { SocialMediaNav } from './components/Sections/SocialMedias/SocialMediaNav';
import SuscribeSection from './components/Sections/SuscribeSection/SuscribeSection';
import TestimonialSection from './components/Sections/TestimonialSection/TestimonialSection';

//import BlogPreviewSection from './components/Sections/BlogPreviewSection/BlogPreviewSection';
//import ContactSection from './components/Sections/ContactSection/ContactSection';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <Header options={'home'}/>
                        <FeaturesSection/>
                        <TestimonialSection/>
                        <SearchResults/>
                        <SocialMediaNav/>
                        <SuscribeSection/>
                    </Route>


                    <Route exact path='/contacto'>
                        <HeaderAbout options={'about'} />
                        <AboutSection />
                    </Route>

                    <Route exact path='/signup'>
                        <RegisterForm />
                    </Route>

                    <Route exact path='/login'>
                        <LoginForm />
                    </Route>

                    <Route exact path='/blog'>
                        <BlogHome />
                    </Route>

                    <Route exact path='/dashboard'>
                        <Profile>
                            <Dashboard />
                        </Profile>
                    </Route>

                    <Route exact path='/dashboard/perfil'>
                        <Profile>
                            <ProfileData/>  
                        </Profile>
                    </Route>

                    <Route exact path='/dashboard/postulaciones/:id'>
                        <Profile>
                            {/* Listado de sus postulaciones */}
                        </Profile>
                    </Route>

                    <Route exact path='/dashboard/guardado/:id'>
                        <Profile>
                            {/* Listado de sus favoritos */}
                        </Profile>
                    </Route>

                    <Route exact path='/jobs/:id'>
                        <Profile>
                            <BussinessProfile/>
                        </Profile>
                    </Route>

                </Switch>
                <Footer/>
            </Layout>
        </BrowserRouter>
      
    );
}

export default App;
