import './ContactUs.css'
import { BiRightArrowAlt } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
    return (
        <div>
            <div className="background h-[250px] md:h-[400px] lg:h-[550px] p-10">
                <div className='font-amatic my-8 md:my-16 mx-auto rounded-lg p-1 flex justify-center items-center gap-4 bg-[#ABCE4E] w-56'>
                    <h1 className='text-2xl md:text-3xl text-white'>HOME</h1>
                    <p><BiRightArrowAlt></BiRightArrowAlt></p>
                    <h1 className='text-2xl md:text-3xl text-white'>CONTACT US</h1>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-[#F9A51A] text-4xl md:text-7xl font-bold' data-aos="zoom-in" data-aos-duration="3000">CONTACT US</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-16 p-8 container mx-auto'>
                <div className='bg-[#ABCE4E] p-20 rounded-lg space-y-4' data-aos="zoom-in" data-aos-duration="3000">
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <SlLocationPin></SlLocationPin>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Location</h1>
                    <p className='text-white font-poppins'>Swamibagh Road No 28</p>
                    <p className='font-poppins text-white'>Dhaka - Bangladesh</p>
                </div>
                <div className='bg-[#F55D52] p-20 rounded-lg space-y-4' data-aos="zoom-in" data-aos-duration="3000">
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <FiPhoneCall></FiPhoneCall>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Call Us</h1>
                    <p className='text-white font-poppins'>Phone : 01719991111</p>
                    <p className='font-poppins text-white'>Fax: +6221.2002.2013</p>
                </div>
                <div className='bg-[#5B9ACF] p-20 rounded-lg space-y-4' data-aos="zoom-in" data-aos-duration="3000">
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <HiOutlineMail></HiOutlineMail>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Email Us</h1>
                    <p className='text-white font-poppins'>dreameve@gmail.com</p>
                    <p className='font-poppins text-white'>eventorganizer@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;