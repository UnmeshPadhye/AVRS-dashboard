import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="my-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <div className="container-fluid">
                <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
                    <Link className="navbar-brand" to="/">
                        Robot Dashboard
                    </Link>
                </span>
            </div>
        </nav>
    );
};

export default Header;
