import Footer from "@/comps/footer";
import Navbar from "@/comps/navbar";
import { AccessoryContext } from "@/contexts/storeContext";
import Image from "next/image";
import filter from '../image/filter.png';
import close from '../image/close.png';
import { useContext } from "react";

const Accessory = () => {

    const accessoryItems = useContext(AccessoryContext);

    return ( 
        <>
        <Navbar/>
        <div className="">
            <div className=" px-5 md:px-12 flex justify-between items-center font-oswald font-medium text-xl md:text-2xl">
                <p className=" tracking-normal">Accessories</p>
                <Image src={ filter } alt="filter" className=" w-6 md:w-8" />
            </div>
            <div className=" md:px-10 mt-8 flex flex-wrap justify-around space-x-0 md:space-x-0 ">
                    {accessoryItems.map((doc)=>(
                            <div className=' w-[42vw] md:w-[250px]' key={doc.id}>
                                <div className=" h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                    <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                                </div>
                                <div className=' flex justify-between py-4'>
                                    <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                    <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
        <div className=" fixed px-5 py-5 md:px-8 md:py-12 shadow w-[80%] md:w-[350px] h-[100vh] z-10 right-0 top-0 bg-[#1b1b1b] capitalize text-white">
            <div className=" flex justify-between">
                <p className=" font-oswald font-medium text-xl tracking-normal ">filters</p>
                <Image src={ close } alt="close" className=""/>
            </div>
            <div className=" py-3 border-b w-full inline-flex items-center space-x-1">
                <input type="checkbox" name="Free" className=" bg-transparent" value='' id="" />
                <p className=" font-oswald font-normal text-base tracking-normal">Free</p>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Accessory;