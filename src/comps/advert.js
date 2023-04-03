import Image from "next/image";
import table from '../image/coffee.png'

const Advert = () => {
    return ( 
        <>
        <div className=" w-full md:h-[300px] bg-[#f1f1f1] py-14 md:py-0 px-5 md:px-20 lg:px-32 flex flex-col-reverse md:flex-row justify-between md:items-center">
            <span className="  mt-7 md:mt-0">
                <p className=" font-Poppins font-semibold tracking-wide text-3xl">Luxe Interiors</p>
                <p className=" font-Poppins font-light tracking-wide text-xl">Spitz Golang Chair</p>
                <button className=" mt-4 border-b-2 border-black font-Poppins font-light tracking-wide text-base">View Now</button>
            </span>
            <Image src={ table } className=' md:w-[400px] w-[250px] block ml-auto md:ml-0'/>
        </div>
        </>
     );
}
 
export default Advert;
<>
</>