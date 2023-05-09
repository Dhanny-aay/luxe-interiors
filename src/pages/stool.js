import Footer from "@/comps/footer";
import Navbar from "@/comps/navbar";
import { StoolContext } from "@/contexts/storeContext";
import Image from "next/image";
import filter from '../image/filter.png';
import close from '../image/close.png';
import { useContext } from "react";
import Section from "@/comps/section";


const Stool = () => {

    const stoolItems = useContext(StoolContext);

    if(typeof window !== "undefined"){
        //select filter btn and filter overlay
        const filtBtn = document.getElementById('filtBtn');
        const clsBtn = document.getElementById('close');
        const overlay = document.getElementById('filter');
    
        filtBtn.addEventListener('click', ()=>{
            if(overlay.classList.contains('translate-x-[100%]')){
                overlay.classList.remove('translate-x-[100%]')
            };
        });
    
        clsBtn.addEventListener('click', ()=>{
                overlay.classList.add('translate-x-[100%]')
        });
    }

    return ( 
        <>
        <Navbar/>
        <div className=" lg:pt-2 pb-3 py-5 px-5 md:px-12 items-center inline-flex space-x-3 ">
            <button className=" py-1 px-2 hover:bg-black hover:text-white text-sm border-black font-oswald border rounded-md tracking-wide">Accessories</button>
            <button className=" py-1 px-2 bg-black text-white  text-sm border-black font-oswald border rounded-md tracking-wide">Stools</button>
            <button className=" py-1 px-2 hover:bg-black hover:text-white text-sm border-black font-oswald border rounded-md tracking-wide">Tables</button>
            <button className=" py-1 px-2 hover:bg-black hover:text-white text-sm border-black font-oswald border rounded-md tracking-wide">Chairs</button>
        </div>
        <div className="">
            <div className=" px-5 md:px-12 flex justify-between items-center font-oswald font-medium text-xl md:text-2xl">
                <p className=" tracking-normal">Stools</p>
                <Image src={ filter } id="filtBtn" alt="filter" className=" w-6 md:w-6" />
            </div>
            <div className=" md:px-10 mt-8 flex flex-wrap justify-around space-x-0 md:space-x-0 ">
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
        </div>
        <div id="filter" className=" fixed translate-x-[100%] transition-all duration-[400ms] px-5 py-5 md:px-8 md:py-12 shadow w-[80%] md:w-[350px] h-[100vh] z-10 right-0 top-0 bg-[#1b1b1b] capitalize text-white">
            <div className=" flex justify-between">
                <p className=" font-oswald font-medium text-xl tracking-normal ">filters</p>
                <Image src={ close } id="close" alt="close" className=""/>
            </div>
            <p className=" font-oswald font-medium text-base tracking-normal mt-7">Shipping</p>
            <div className=" pt-2 pb-3 border-b w-full mt-3">
                <label className=" font-oswald font-light text-base form-control tracking-normal">
                    <input type="checkbox" name="Free" className=" bg-transparent" value='' id="" />
                    free
                </label>
            </div>
            <p className=" font-oswald font-medium text-base tracking-normal mt-2">color</p>
            <div className=" py-3 space-y-2 border-b">
                <label className=" font-oswald font-light text-base form-control tracking-normal" htmlFor="">
                    <input type="radio" name="color" id="" />
                    Black
                </label>
                <label className=" font-oswald font-light text-base form-control tracking-normal" htmlFor="">
                    <input type="radio" name="color" id="" />
                    White
                </label>
                <label className=" font-oswald font-light text-base form-control tracking-normal" htmlFor="">
                    <input type="radio" name="color" id="" />
                    Red
                </label>
                <label className=" font-oswald font-light text-base form-control tracking-normal" htmlFor="">
                    <input type="radio" name="color" id="" />
                    Blue
                </label>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Stool;