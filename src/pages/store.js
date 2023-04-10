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
        <div className="px-2 mt-[64px] grid w-full grider  md:flex-wrap flex-wrap lg:justify-around space-x-0 md:space-x-0 ">
                {accessory.slice(0, 5).map((doc)=>(
                        <div className=' w-[45vw] md:w-[250px]' key={doc.id}>
                            <div className=" h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
                {stool.slice(0, 5).map((doc)=>(
                        <div className='w-[45vw] md:w-[250px]' key={doc.id}>
                            <div className=" h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
                {chair.slice(0, 5).map((doc)=>(
                        <div className='w-[45vw] md:w-[250px] ' key={doc.id}>
                            <div className="h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
                {table.slice(0, 5).map((doc)=>(
                        <div className=' w-[45vw] md:w-[250px]' key={doc.id}>
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
        </>
     );
}
 
export default Store;