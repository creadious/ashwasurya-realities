import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
            <ScrollRestoration />
        </div>
    );
};

export default Main;