
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <div className='font-poppins container mx-auto bg-[#eaf1f1cf]'>
            <div className='sticky top-0 z-10'>
            <Navbar></Navbar>
            </div>
            <div className='z-1'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;