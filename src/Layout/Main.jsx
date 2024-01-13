import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
            <ScrollRestoration />
            <ScrollToTop/>
        </div>
    );
};

export default Main;