import Footer from "@/comps/footer";
import Navbar from "@/comps/navbar";
import { ChairContext } from "@/contexts/storeContext";
import Image from "next/image";
import { useContext } from "react";

const Chairs = () => {

const chairItems = useContext(ChairContext);

    return ( 
        <>
        <Navbar/>
        <div className="">
            <div className=" px-5 md:px-12 flex justify-between items-center font-oswald font-medium text-xl md:text-2xl">
                <p className=" tracking-normal">Chairs</p>
                {/* <button className=" font-normal hover:bg-black hover:text-white transition-all text-base border rounded-md px-5 py-2 border-black">See All</button> */}
            </div>
            <div className=" md:px-10 mt-8 flex flex-wrap justify-around space-x-0 md:space-x-0 ">
                    {chairItems.map((doc)=>(
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
        <Footer/>
        </>
     );
}
 
export default Chairs;