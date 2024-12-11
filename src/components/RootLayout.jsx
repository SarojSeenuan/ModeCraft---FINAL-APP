import { Outlet } from 'react-router';
import { Navigation } from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../util/ScrollToTop';

function RootLayout() {


    return (
        <div className="layout-container">
            <ScrollToTop />
            <Navigation />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
