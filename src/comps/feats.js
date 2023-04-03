import jean from '../image/Jean-Micheal.png'
import Stabile from '../image/Stabile-Side.png'
import etna from '../image/etna.png'
import leiba from '../image/leibal.png'
import Stéphane from '../image/Stéphane-Parmentier.png'
import Image from 'next/image';

const Feats = () => {
    return ( 
        <>
        <div className=" px-5 md:px-8 lg:px-10 my-[64px]">
            <span className=" flex flex-row font-Poppins space-x-3 md:space-x-10">
                <p className=" text-base font-medium tracking-wide hover:border-b-2 border-black transition-all">New Arrival</p>
                <p className=" text-base font-medium tracking-wide hover:border-b-2 border-black transition-all">Best Seller</p>
                <p className=" text-base font-medium tracking-wide border-b-2 border-black transition-all">Featured</p>
                <p className=" text-base font-medium tracking-wide hover:border-b-2 border-black transition-all">Hot</p>
            </span>
            <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0">
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">HOT</p>
                        <Image src={ Stéphane } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Draka parc Chair</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$260.00</p>
                    </div>
                </div>
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] shadow-sm flex justify-center items-center rounded-sm relative">
                        <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">SALE</p>
                        <Image src={ leiba } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>parcebel Vase</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$167.00</p>
                    </div>
                </div>
                <div>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <Image src={ Stabile } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Mongol Stool</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$299.57</p>
                    </div>
                </div>
                <div>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">NEW</p>
                        <Image src={ jean } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Ck Minimal Stool</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$599.57</p>
                    </div>
                </div>
            </div>
            <button className=' block ml-auto mt-4 border-b-2 border-black font-Poppins font-light tracking-wide text-base'>View More</button>
        </div>
        </>
     );
}
 
export default Feats;
<>
</>