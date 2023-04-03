import Image from "next/image";
import logo1 from '../image/logo1.png';
import logo2 from '../image/logo2.png';
import logo3 from '../image/logo3.png';
import logo4 from '../image/logo4.png';
import logo5 from '../image/logo5.png';


const Recog = () => {
    return ( 
        <>
        <div className=" my-[64px] w-full flex flex-row justify-around flex-wrap lg:flex-nowrap lg:justify-between md:p-8 p-5 lg:p-10">
            <Image src={ logo1 } className="w-[120px] md:w-[150px] pb-5"/>
            <Image src={ logo2 } className="w-[120px] md:w-[150px] pb-5"/>
            <Image src={ logo3 } className="w-[120px] md:w-[150px] pb-5"/>
            <Image src={ logo5 } className="w-[120px] md:w-[150px] pb-5"/>
        </div>
        </>
     );
}
 
export default Recog;
<>
</>