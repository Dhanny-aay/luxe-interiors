import wing from '../image/wing.png'
import table from '../image/table.png'
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);

    const handleClick = ()=>{
        if(one == true){
            setOne(false) || setTwo(true);
        }
        else if(two == true){
            setOne(true) || setTwo(false);
        }
    };
    return ( 
        <>
        {one &&  <div className=' flex w-full flex-col-reverse md:flex-row justify-center md:space-x-24 px-5 md:px-8 lg:px-12 items-center py-20 md:py-24 relative bg-[#f1f1f1]'>
            <div className=' font-Poppins'>
                <p className=' font-semibold text-4xl tracking-wide text-black'>Clearance</p>
                <p className=' font-light font-oswald text-2xl tracking-wide capitalize'>Give your home a timeless classic feel</p>
                <p className=' font-light text-sm mt-4 tracking-wide capitalize'>It is a fact that we are the best at that</p>
                <button className=' font-normal text-base border-b border-black mt-5 pb-2 tracking-wide capitalize'>View now</button>
            </div>
            <Image src={ wing } className=' w-[350px] ' alt="" />
            <div className=' absolute bottom-4 right-7 flex flex-row'>
                <button className=' font-normal text-base mt-5 pb-2 tracking-wide capitalize px-2'>Back</button>
                <button onClick={handleClick} className=' font-normal text-base mt-5 pb-2 h-5 tracking-wide border-l border-black capitalize px-2'>Next</button>
            </div>
        </div>}

        { two && <div className=' flex w-full flex-col-reverse md:flex-row justify-center md:space-x-24 px-5 md:px-8 lg:px-12 items-center py-20 md:py-24 relative bg-[#f1f1f1]'>
            <div className=' font-Poppins'>
                <p className=' font-semibold text-4xl tracking-wide text-black'>Majestic</p>
                <p className=' font-light font-oswald text-2xl tracking-wide capitalize'>Give your home a Majestic feel</p>
                <p className=' font-light text-sm mt-4 tracking-wide capitalize'>It is a fact that we are the best at that</p>
                <button className=' font-normal text-base border-b border-black mt-5 pb-2 tracking-wide capitalize'>View now</button>
            </div>
            <Image src={ table } className=' w-[350px] ' alt="" />
            <div className=' absolute bottom-4 right-7 flex flex-row'>
                <button className=' font-normal text-base mt-5 pb-2 tracking-wide capitalize px-2'>Back</button>
                <button onClick={handleClick} o className=' font-normal text-base mt-5 pb-2 h-5 tracking-wide border-l border-black capitalize px-2'>Next</button>
            </div>
        </div>}
        </>
     );
}
 
export default Hero;