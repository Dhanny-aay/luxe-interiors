const Update = () => {
    return (  
        <>
        <div className=" mt-[64px] p-5 w-full h-[350px] bg-[#f1f1f1] flex flex-col justify-center md:items-center space-y-8">
            <p className=" font-oswald text-2xl lg:text-3xl font-medium tracking-wider">KEEP UPDATED</p>
            <p className=" font-Poppins text-sm md:text-base font-light tracking-wide capitalize">Sign up for our newsletter to recieve updates on exclusive offers</p>
            <span className=" flex flex-row space-x-2">
                <input type="text" placeholder="Enter Your Mail" className=" w-[400px] h-9 md:h-[46px] border border-black p-2 bg-transparent text-base font-Poppins placeholder:text-sm placeholder:font-light" />
                <button className=" text-white bg-black font-Poppins font-normal text-sm p-2 md:w-[150px] tracking-wider">SUBSCRIBE</button>
            </span>
        </div>
        </>
    );
}
 
export default Update;