import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.png'


const Header = () => {
    return (
        <div className='container_width  '>
            <div className='w-[1140px] fixed z-10 mt-8'>
                <div className="navbar text-white">
                    <div className="flex-1">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/appointment'>Appointment</Link></li>
                            <li><Link to='/login'>Login</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;