import Image from 'next/image';
import { useState } from 'react';
import { AccessoryContext, ChairContext, StoolContext, TableContext } from '@/contexts/storeContext';
import { useContext } from 'react'


const Category = () => {

    const table = useContext(TableContext);
    const chair = useContext(ChairContext);
    const stool = useContext(StoolContext);
    const accessory = useContext(AccessoryContext);


    const [acceCate, setAcceCate] = useState(true);
    const [stoolCate, setStoolCate] = useState(false);
    const [chairCate, setChairCate] = useState(false);
    const [tableCate, setTableCate] = useState(false);


    function removeBorder(){
        const accBtn = document.getElementById('acc');
        accBtn.classList.remove('border-b-2')
    }

    const stoolClick = ()=>{
        setStoolCate(true);
        setAcceCate(false);
        setChairCate(false);
        setTableCate(false);
        removeBorder()
    }

    const chairClick = ()=>{
        setStoolCate(false);
        setAcceCate(false);
        setChairCate(true);
        setTableCate(false);
        removeBorder()
    }
    const tableClick = ()=>{
        setStoolCate(false);
        setAcceCate(false);
        setChairCate(false);
        setTableCate(true);
        removeBorder()
    }
    const acceClick = ()=>{
        setStoolCate(false);
        setAcceCate(true);
        setChairCate(false);
        setTableCate(false);
        removeBorder()
    }


    return ( 
        <>
        <div className=" px-5 md:px-8 lg:px-10 my-[64px]">
            <span className=" flex flex-row font-Poppins space-x-3 md:space-x-10">
                <button id='acc' onClick={ acceClick } className=" text-base font-medium tracking-wide border-b-2 hover:border-b-2 focus:border-b-2 border-black">Accessories</button>
                <button onClick={ stoolClick } className=" text-base font-medium tracking-wide hover:border-b-2 focus:border-b-2 border-black">Stools</button>
                <button onClick={ chairClick } className=" text-base font-medium tracking-wide hover:border-b-2 focus:border-b-2 border-black">Chairs</button>
                <button onClick={ tableClick } className=" text-base font-medium tracking-wide hover:border-b-2 focus:border-b-2 border-black">Tables</button>
            </span>
            { acceCate && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0 ">
                {accessory.slice(0, 4).map((doc)=>(
                        <div className='' key={doc.id}>
                            <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
            </div>}

            { stoolCate && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0 ">
                    {stool.slice(0, 4).map((doc)=>(
                        <div className='' key={doc.id}>
                            <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
            </div>}

            { chairCate && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0 ">
                    {chair.slice(0, 4).map((doc)=>(
                        <div className='' key={doc.id}>
                            <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
                                <Image src={doc.url} width={150} height={200} alt={doc.name} className=' w-[150px] h-[200px]'/>
                            </div>
                            <div className=' flex justify-between py-4'>
                                <p className=' font-Poppins font-medium text-sm tracking-wide capitalize'>{doc.name}</p>
                                <p className='font-Poppins font-medium text-sm capitalize'>{'$'+doc.price+'.00'}</p>
                            </div>
                        </div>
                    ))}
            </div>}

           { tableCate && <div className=" mt-[64px] flex overflow-x-scroll md:overflow-x-visible flex-row md:justify-around md:flex-wrap lg:flex-nowrap lg:justify-between space-x-10 md:space-x-0 ">
                {table.slice(0, 4).map((doc)=>(
                    <div className='' key={doc.id}>
                        <div className=" w-[250px] h-[300px] bg-[#f1f1f1] flex justify-center items-center shadow-sm rounded-sm relative">
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
 
export default Category;