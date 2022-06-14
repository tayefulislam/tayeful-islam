import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const manu = <>

        <li className='text-lg font-bold'><Link to='/projects'>Projects</Link></li>
        <li className='text-lg font-bold'><Link to='/blogs'>Blogs</Link></li>
        <li className='text-lg font-bold'><Link to='/contact-me'>Contact Me</Link></li>

    </>




    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manu}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">Tayeful Islam</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {manu}
                </ul>
            </div>
            <div class="navbar-end">
                <Link to='/aboutme' class="btn">About Me</Link>
            </div>
        </div>
    );
};

export default Navbar;