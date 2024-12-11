import { NavLink } from 'react-router';
import '../styles/global.css';
import logo from '../assets/modecarft-logo-orange.png';
import love from '../assets/love.png';
import user from '../assets/user.png';

export function Navigation() {
    return (
        <header className='header'>
            <div className='left'>
                <NavLink to="/">
                    <img src={logo} alt='logo' />
                </NavLink>
            </div>
            <nav className='middle'>
                <ul className='list'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/showcase" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Showcase
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/avatarroom" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Avatar Room
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className='right'>
                <ul className='list icons'>
                    <li>
                        <NavLink>
                            <img src={user} alt='profile' className='icon' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <img src={love} alt='favorite' className='icon' />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
