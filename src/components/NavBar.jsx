import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const NavBar = () => (
    <header>
        <div className="bg-green-800 p-5 flex items-center justify-between flex-wrap">
            <div classname="block">
                <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-300 hover:text-gray-100">Nathan Stone</span></Link>
            </div>
            <nav className="block">
                <Link to="/"><span className="inline-block text-gray-300 hover:text-gray-100 mr-4">Home</span></Link>
                <Link to="/about"><span className="inline-block text-gray-300 hover:text-gray-100 mr-4">About</span></Link>
                <Link to="/contact"><span className="inline-block text-gray-300 hover:text-gray-100 mr-4">Contact</span></Link>
            </nav>
        </div>
    </header>
);
export default NavBar;