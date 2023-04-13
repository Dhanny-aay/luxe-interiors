import Navbar from "@/comps/navbar";
import { AccessoryContext, ChairContext, StoolContext, TableContext } from "@/contexts/storeContext";
import { useContext } from "react";
import Image from "next/image";


const Store = () => {

    const accessory = useContext(AccessoryContext);
    const stool = useContext(StoolContext);
    const chair = useContext(ChairContext);
    const table = useContext(TableContext);
    return ( 
        <>
        <Navbar/>
        <div className=" md:pb-8">
            <div className=" px-5 md:px-12 flex justify-between items-center font-oswald font-medium text-xl md:text-2xl">
                <p className=" tracking-normal">Accessories</p>
                <button className=" font-normal hover:bg-black hover:text-white transition-all text-base border rounded-md px-5 py-2 border-black">See All</button>
            </div>
            <div className=" md:px-10 mt-8 flex flex-wrap justify-around space-x-0 md:space-x-0 ">
                    {accessory.slice(0, 4).map((doc)=>(
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

        <div className=" md:pb-8">
            <div className=" px-5 md:px-12 flex justify-between items-center font-oswald font-medium text-xl md:text-2xl">
                <p className=" tracking-normal">Stools</p>
                <button className=" font-normal hover:bg-black hover:text-white transition-all text-base border rounded-md px-5 py-2 border-black">See All</button>
            </div>
            <div className=" md:px-10 mt-8 flex flex-wrap justify-around space-x-0 md:space-x-0 ">
                    {stool.slice(0, 4).map((doc)=>(
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

        <div className=" md:pb-8">
            <div className=" px-5 md:px-12 flex justify-between items-center font-oswald font-medium text-xl md:text-2xl">
                <p className=" tracking-normal">Chairs</p>
                <button className=" font-normal hover:bg-black hover:text-white transition-all text-base border rounded-md px-5 py-2 border-black">See All</button>
            </div>
            <div className=" md:px-10 mt-8 flex flex-wrap justify-around space-x-0 md:space-x-0 ">
                    {chair.slice(0, 5).map((doc)=>(
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

        <div className=" md:pb-8">
            <div className=" px-5 md:px-12 flex justify-between items-center font-oswald font-medium text-xl md:text-2xl">
                <p className=" tracking-normal">Tables</p>
                <button className=" font-normal hover:bg-black hover:text-white transition-all text-base border rounded-md px-5 py-2 border-black">See All</button>
            </div>
            <div className=" md:px-10 mt-8 flex flex-wrap justify-around space-x-0 md:space-x-0 ">
                    {table.slice(0, 4).map((doc)=>(
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
        </>
     );
}
 
export default Store;