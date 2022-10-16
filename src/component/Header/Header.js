import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import ScoreBoard from '../ScoreBoard/ScoreBoard';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-3/4 mx-auto '>
            <div className='h-20 w-full bg-slate-500 '>
                <div onClick={() => setOpen(!open)} className="md:hidden">
                    {
                        open ? <XMarkIcon className="h-6 w-6 " /> : <Bars3Icon className="h-6 w-6" />
                    }

                </div>

                <h3 className='text-xl font-bold'>Quiz Contest</h3>
                <ul className={`md:flex justify-center z-10  duration-500 ease-in md:static absolute ${open ? 'top-14 left-28' : 'top-[-120px] left-28'}`}>
                    <li className='ml-6 text-lg hover:bg-indigo-500 duration-300 hover:text-white py-1 px-3'><Link to='/'>Home</Link></li>
                    <li className='ml-6 text-lg hover:bg-indigo-500 duration-300 hover:text-white py-1 px-3'><Link to='/topics'>Topics</Link></li>
                    <li className='ml-6 text-lg hover:bg-indigo-500 duration-300 hover:text-white py-1 px-3'><Link to='/statistics'>Statistics</Link></li>
                    <li className='ml-6 text-lg hover:bg-indigo-500 duration-300 hover:text-white py-1 px-3'><Link to='/blog'>Blog</Link></li>
                </ul>

            </div>
            <ScoreBoard></ScoreBoard>

        </div>
    );
};

export default Header;