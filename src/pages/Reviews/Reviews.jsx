const Reviews = () => {
    return (
        <div className="lg:mx-10 md:mx-0 mx-8 flex flex-col md:flex-row py-16 rounded-lg gap-16 px-10 lg:px-40 bg-[#FF900E1A] mb-10 mt-6 md:my-16" data-aos="flip-right" data-aos-duration="3000">
            <div className="mx-auto">
                <h1 className="text-7xl font-black text-[#F9A51A]">2K+</h1>
                <p className="font-extrabold">Happy Kids</p>
            </div>
            <div className="mx-auto">
                <h1 className="text-7xl font-black text-[#F9A51A]">2K+</h1>
                <p className="font-extrabold">Happy Parents</p>
            </div>
            <div  className="mx-auto">
                <h1 className="text-7xl font-black text-[#F9A51A]">35+</h1>
                <p className="font-extrabold">Expert Team</p>
            </div>
            <div  className="mx-auto">
                <h1 className="text-7xl font-black text-[#F9A51A]">15+</h1>
                <p className="font-extrabold">Years Experience</p>
            </div>
        </div>
    );
};

export default Reviews;