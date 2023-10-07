const Banner = () => {
    return (
            <div className="flex flex-col md:my-10 lg:my-24 md:flex-row p-16 md:p-8 lg:p-0 gap-10 md:gap-20 justify-center items-center">
                <div className="space-y-5">
                    <h1 className="text-[#1C1B1B] text-4xl md:text-5xl lg:text-6xl font-extrabold">Organization of <span className="text-[#F9A51A]">Birthday Events</span></h1>
                    <p className="text-xl font-medium text-[#1C1B1B99]">We do not just plan birthdays, we craft experiences that will be cherished for a lifetime. Our mission is to transform your vision into a captivating reality.With meticulous attention to detail, a creative flair, and a passion for excellence, we curate celebrations that are nothing short of extraordinary.</p>
                    <button className="font-amatic text-2xl py-3 px-7 rounded-lg text-white font-medium bg-[#F9A51A]">WHAT WE OFFER</button>
                </div>
                <img className="w-full md:w-[50%] lg:w-[40%]" src="https://i.ibb.co/fNBYP8Y/customer-service.png" alt="" />
            </div>
    );
};

export default Banner;