import Reviews from '../Reviews/Reviews';
import './About.css'
import { BiRightArrowAlt } from 'react-icons/bi';

const AboutUs = () => {
    return (
        <div>
            <div className="background h-[250px] md:h-[400px] lg:h-[550px] p-10">
            <div className='font-amatic my-8 md:my-16 mx-auto rounded-lg p-1 flex justify-center items-center gap-4 bg-[#ABCE4E] w-56'>
                    <h1 className='text-2xl md:text-3xl text-white'>HOME</h1>
                    <p><BiRightArrowAlt></BiRightArrowAlt></p>
                    <h1 className='text-2xl md:text-3xl text-white'>ABOUT US</h1>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-[#F9A51A] text-4xl md:text-7xl font-bold'>ABOUT US</h1>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-6 md:gap-12 container mx-auto my-12 lg:my-24 justify-center items-center'>
                <div className='text-center lg:text-left p-10'>
                    <h1 className=' text-[#F9A51A] my-3 font-amatic text-2xl'>WHO WE ARE</h1>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold my-4'>There’s nothing more magical than a child’s imagination</h1>
                    <p className='text-[#1C1B1B99] font-poppins'>Our mission is simple: to create exceptional birthday celebrations that exceed your expectations. We believe that every birthday is a milestone worth celebrating, and we are here to ensure that your event is as remarkable as the person it honors. </p>
                </div>
                <div>
                    <img className='rounded-lg w-[80%] mx-auto' src="https://point.moxcreative.com/beeparty/wp-content/uploads/sites/10/2022/05/birthday-girls-in-the-style-of-unicorns-.jpg" alt="" />
                </div>
            </div>
            <div className='container mx-auto'>
                <Reviews></Reviews>
            </div>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 container mx-auto my-12 lg:my-24 justify-center items-center lg:px-12'>
                <img className='rounded-lg w-[60%] mx-auto' src="https://point.moxcreative.com/beeparty/wp-content/uploads/sites/10/2022/05/kids-birthday-party-boy-blowing-out-candles-on-cake-1024x576.jpg" alt="" />
                <div className='text-center lg:text-left p-10'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold my-4'>Elevate Your Celebration: Unforgettable Birthday Event Management</h1>
                    <p className='text-[#1C1B1B99] font-poppins'>No two birthdays are the same, and we embrace that diversity. We tailor our services to reflect the individuality of each client, ensuring a truly bespoke experience.
                    Excellence: We are committed to delivering nothing but excellence in every aspect of event management, from venue selection entertainment, catering to decor.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;