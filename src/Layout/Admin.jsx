import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logoash2.webp'
import { useState } from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';

const Admin = () => {

    const [drawer, setDrawer] = useState(false);
    const navigate = useNavigate()
    const { logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/admin/login');
                toast.success(`Admin logout successfully`);
                console.log('User Logout')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='flex md:gap-10'>
            <button onClick={() => setDrawer(true)} className='md:hidden absolute top-3 left-3 text-xl'>
                <HiOutlineMenuAlt2 />
            </button>
            <div className='md:w-96 md:p-5'>
                <section className={`fixed md:left-0 duration-200 ${drawer ? 'left-0' : '-left-[40rem]'} top-0 bg-slate-200 md:w-80 w-3/4 h-screen p-5`}>
                    <button onClick={() => setDrawer(false)} className='md:hidden absolute top-3 left-3 text-xl'>
                        <IoMdClose />
                    </button>
                    <div className='flex items-center justify-center'>
                        <Link to='/'>
                            <img src={logo} alt="" className='md:w-40 w-20' />
                        </Link>
                        {/* <h1 className="text-xl font-semibold"> Admin Panel</h1> */}
                    </div>
                    <div className='md:p-3 mt-5 md:text-base text-sm'>
                        <Link to={'/admin/user-data'} className='w-full block md:py-2 md:px-5 px-4 py-2 bg-white rounded-full shadow-2xl'>Customers Data</Link>
                    </div>
                    <div className='absolute bottom-5 md:w-64 w-52 left-6'>
                        <button onClick={handleLogout} className='bg-white w-full px-3 py-1 shadow-inner border border-black' >Logout</button>
                    </div>
                </section>
            </div>
            <div className='h-screen md:p-5 w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;