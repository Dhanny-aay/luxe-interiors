import vase from '../image/vase.png'
import stool from '../image/Stool.png'
import hr from '../image/hrTable.png'
import wood from '../image/Wood.png'
import chair from '../image/Chair.png'
import Image from 'next/image';

const Category = () => {
    return ( 
        <>
        <div className=" px-5 md:px-8 lg:px-10 my-[64px]">
            <span className=" flex flex-row font-Poppins space-x-3 md:space-x-10">
                <p className=" text-base font-medium tracking-wide hover:border-b-2 border-black transition-all">Furniture</p>
                <p className=" text-base font-medium tracking-wide hover:border-b-2 border-black transition-all">Lighting</p>
                <p className=" text-base font-medium tracking-wide hover:border-b-2 border-black transition-all">Sofa</p>
                <p className=" text-base font-medium tracking-wide hover:border-b-2 border-black transition-all">Chairs</p>
                <p className=" text-base font-medium tracking-wide border-b-2 border-black transition-all">All</p>
            </span>
            <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0 ">
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">HOT</p>
                        <Image src={ chair } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Draka parc Chair</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$260.00</p>
                    </div>
                </div>
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] shadow-sm flex justify-center items-center rounded-sm relative">
                        <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">SALE</p>
                        <Image src={ vase } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>parcebel Vase</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$167.00</p>
                    </div>
                </div>
                <div>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <Image src={ wood } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Mongol Stool</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$299.57</p>
                    </div>
                </div>
                <div>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">NEW</p>
                        <Image src={ hr } className=' w-[150px] h-[200px]'/>
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
 
export default Category;