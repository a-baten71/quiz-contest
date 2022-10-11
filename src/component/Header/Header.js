import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div onClick={()=> setOpen(!open)} className="md:hidden">
                {
                    open ?  <XMarkIcon className="h-6 w-6 "/> :  <Bars3Icon className="h-6 w-6"/>
                }

            </div>
            <ul className='md:flex justify-center ml-11'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    );
};

export default Header;