import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = (Page) => {
    return (
        <nav className="text-md font-extrabold text-gray-900 dark:text-white">
            <Navbar class="" />
            <div className="container-fluid">
                <div className='md:text-5xl my-3'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
                        <Link className="navbar-brand" to="/">
                            {Page.title}
                        </Link>
                    </span>
                </div>
            </div>
        </nav>

    );
};

export default Header;
