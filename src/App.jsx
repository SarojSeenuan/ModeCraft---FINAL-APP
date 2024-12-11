import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './components/RootLayout';
import ErrorPage from './pages/ErrorPage';
import DesignerShowcase from './pages/DesignerShowcase';
import AvatarFittingRoom from './pages/AvatarFittingRoom';
import Shopping from './pages/ShoppingPage';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/showcase', element: <DesignerShowcase /> },
            { path: '/avatarroom', element: <AvatarFittingRoom /> },
            { path: '/shopping', element: <Shopping /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
