import Navbar from "@/comps/navbar";
import { StoolContext } from "@/contexts/storeContext";
import Image from "next/image";
import { useContext } from "react";


const Stool = () => {

    const stoolItems = useContext(StoolContext);

    return ( 
        <>
        <Navbar/>
        <div className="md:px-12 mt-[64px] flex flex-wrap justify-around space-x-0 md:space-x-0">
            {stoolItems.map((doc)=>(
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
        </>
     );
}
 
export default Stool;