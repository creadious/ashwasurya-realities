import toast from 'react-hot-toast';

import logo from '../../assets/logoash2.webp';

const AdminLogin = ({ setUserLogin }) => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const password = form.password.value;
        if (id === 'admin' && password === 'admin') {
            toast.success('Login successfully');
            setUserLogin(false)
        }
        else {
            toast.success('please check your password')
            setUserLogin(false);
        }
    }

    return (
        <div className='h-screen flex items-center justify-center p-2'>
            <div className='space-y-5 lg:w-1/3 bg-slate-200 p-5 py-10'>
                <img src={logo} alt="" className='md:w-48 w-24 mx-auto' />
                <h1 className='text-2xl uppercase text-center font-semibold'>Admin Panel Login</h1>
                <form onSubmit={handleLogin} className='md:px-20 space-y-3'>
                    <input type="text" name='id' className='w-full py-2 px-2 text-slate-500' defaultValue={'admin'} readOnly />
                    <input type="password" name='password' className='w-full py-2 px-2' />
                    <div className='flex justify-center'>
                        <button className='bg-black text-white px-3 py-1'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;