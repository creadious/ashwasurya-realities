import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

import logo from '../../assets/logoash2.webp';
import useAuth from '../../hooks/useAuth';

const AdminLogin = () => {

    const { signIn } = useAuth();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result?.user);
                toast.success(`Welcome admin`);
                navigate('/admin/user-data');
                form.reset();
            })
            .catch(err => {
                console.log(err);
                toast.error('Somethings is wrong! Check email and password and try again');
            })
    }

    return (
        <div className='h-screen flex items-center justify-center p-2'>
            <div className='space-y-5 lg:w-1/3 bg-slate-200 p-5 py-10'>
                <img src={logo} alt="" className='md:w-48 w-24 mx-auto' />
                <h1 className='text-2xl uppercase text-center font-semibold'>Admin Panel Login</h1>
                <form onSubmit={handleLogin} className='md:px-20 space-y-3'>
                    <input type="text" name='email' className='w-full py-2 px-2 text-slate-500' placeholder='Enter email' />
                    <input type="password" name='password' className='w-full py-2 px-2' placeholder='Enter password' />
                    <div className='flex justify-center'>
                        <button className='bg-black text-white px-3 py-1'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;