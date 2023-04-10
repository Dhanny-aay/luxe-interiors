import Image from 'next/image';
import { useContext, useState } from 'react'
import { BestItemsContext, FeatItemsContext, HotItemsContext, NewItemsContext } from '@/contexts/storeContext'

const Feats = () => {
    const [newArr, setNewArr] = useState(true);
    const [best, setBest] = useState(false);
    const [feat, setFeat] = useState(false);
    const [hot, setHot] = useState(false);

    const hotItems = useContext(HotItemsContext);
    const featItems = useContext(FeatItemsContext);
    const bestItems = useContext(BestItemsContext);
    const newItems = useContext(NewItemsContext);

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
                    {newItems.slice(0, 4).map((doc)=>(
                        <div className='' key={doc.id}>
                            <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">New</p>
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
            </div>}

            { best && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0">
                    {bestItems.slice(0, 4).map((doc)=>(
                        <div className='' key={doc.id}>
                            <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">Best</p>
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
            </div>}

            { feat && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0">
                    {featItems.slice(0, 4).map((doc)=>(
                        <div className='' key={doc.id}>
                            <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">Featured</p>
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
            </div>}

            { hot && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0">
                    {hotItems.slice(0, 4).map((doc)=>(
                        <div className='' key={doc.id}>
                            <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <p className=" absolute top-3 right-3 font-Poppins tracking-wide text-base font-medium">HOT</p>
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
            </div>}
            <button className=' block ml-auto mt-4 border-b-2 border-black font-Poppins font-light tracking-wide text-base'>View More</button>
        </div>
        </>
     );
}
 
export default Feats;
<>
</>