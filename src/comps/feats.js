import jean from '../image/Jean-Micheal.png'
import Stabile from '../image/Stabile-Side.png'
import etna from '../image/etna.png'
import leiba from '../image/leibal.png'
import Stéphane from '../image/Stéphane-Parmentier.png'
import Image from 'next/image';
import { useState } from 'react'

const Feats = () => {
    const [newArr, setNewArr] = useState(true);
    const [best, setBest] = useState(false);
    const [feat, setFeat] = useState(false);
    const [hot, setHot] = useState(false);

    function removeBorder(){
        const accBtn = document.getElementById('arr');
        accBtn.classList.remove('border-b-2')
    }

    const newClick = ()=>{
        setNewArr(true);
        setBest(false);
        setFeat(false);
        setHot(false);
        removeBorder();
    }

    const bestClick = ()=>{
        setNewArr(false);
        setBest(true);
        setFeat(false);
        setHot(false);
        removeBorder();
    }

    const featClick = ()=>{
        setNewArr(false);
        setBest(false);
        setFeat(true);
        setHot(false);
        removeBorder();
    }

    const hotClick = ()=>{
        setNewArr(false);
        setBest(false);
        setFeat(false);
        setHot(true);
        removeBorder();
    }

    return ( 
        <>
        <div className=" px-5 md:px-8 lg:px-10 my-[64px]">
            <span className=" flex flex-row font-Poppins space-x-3 md:space-x-10">
                <button id='arr' onClick={ newClick } className=" text-base font-medium tracking-wide border-b-2 hover:border-b-2 focus:border-b-2 border-black">New Arrival</button>
                <button onClick={ bestClick } className=" text-base font-medium tracking-wide hover:border-b-2 focus:border-b-2 border-black">Best Seller</button>
                <button onClick={ featClick } className=" text-base font-medium tracking-wide hover:border-b-2 focus:border-b-2 border-black">Featured</button>
                <button onClick={ hotClick } className=" text-base font-medium tracking-wide hover:border-b-2 focus:border-b-2 border-black">Hot</button>
            </span>
            { newArr && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0">
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <Image src={ Stéphane } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Draka parc New</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$260.00</p>
                    </div>
                </div>
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] shadow-sm flex justify-center items-center rounded-sm relative">
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
                        <Image src={ jean } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Ck Minimal Stool</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$599.57</p>
                    </div>
                </div>
            </div>}

            { best && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0">
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <Image src={ Stéphane } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Draka parc best</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$260.00</p>
                    </div>
                </div>
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] shadow-sm flex justify-center items-center rounded-sm relative">
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
                        <Image src={ jean } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Ck Minimal Stool</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$599.57</p>
                    </div>
                </div>
            </div>}

            { feat && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0">
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <Image src={ Stéphane } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Draka parc feat</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$260.00</p>
                    </div>
                </div>
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] shadow-sm flex justify-center items-center rounded-sm relative">
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
                        <Image src={ jean } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Ck Minimal Stool</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$599.57</p>
                    </div>
                </div>
            </div>}

            { hot && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0">
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                        <Image src={ Stéphane } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Draka parc hot</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$260.00</p>
                    </div>
                </div>
                <div className=''>
                    <div className=" w-[250px] h-[300px] bg-[#f1f1f1] shadow-sm flex justify-center items-center rounded-sm relative">
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
                        <Image src={ jean } className=' w-[150px] h-[200px]'/>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>Ck Minimal Stool</p>
                        <p className='font-Poppins font-medium text-sm capitalize'>$599.57</p>
                    </div>
                </div>
            </div>}
            <button className=' block ml-auto mt-4 border-b-2 border-black font-Poppins font-light tracking-wide text-base'>View More</button>
        </div>
        </>
     );
}
 
export default Feats;
<>
</>