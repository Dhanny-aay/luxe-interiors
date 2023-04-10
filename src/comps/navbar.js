import menu from '../image/menu.png';
import Image from 'next/image';
import { useContext } from 'react';
import { TableContext } from '@/contexts/storeContext';

const Navbar = () => {
    return ( 
        <>
        <div className=" lg:py-10 py-5 px-5 md:px-12 items-center bg-white justify-between flex ">
            <span className="hidden lg:flex flex-row space-x-6">
                <p className=" font-Poppins font-medium text-base">Home</p>
                <p className=" font-Poppins font-medium text-base">Feature</p>
                <p className=" font-Poppins font-medium text-base">About Us</p>
            </span>
            <p className=" font-oswald font-light tracking-wide text-2xl lg:text-3xl ">Luxe Interiors</p>
            <span className="flex-row hidden lg:flex space-x-6">
                <p className=" font-Poppins font-medium text-base">Login</p>
                <p className=" font-Poppins font-medium text-base">Favorites</p>
                <p className=" font-Poppins font-medium text-base">Cart()</p>
            </span>
            <Image className='flex lg:hidden w-7' src={menu} />
        </div>
        </>
     );
}
 
export default Navbar;