import { BiRightArrowAlt } from 'react-icons/bi';
import './Booking.css'
import Memories from '../Memories/Memories';
import { FaCheckCircle } from 'react-icons/fa';

const Booking = () => {
    return (
        <div>
            <div className="background h-[250px] md:h-[400px] lg:h-[550px] p-10" data-aos="zoom-out-down" data-aos-duration="2000">
                <div className='font-amatic my-8 md:my-16 mx-auto rounded-lg p-1 flex justify-center items-center gap-4 bg-[#ABCE4E] w-56'>
                    <h1 className='text-2xl md:text-3xl text-white'>HOME</h1>
                    <p><BiRightArrowAlt></BiRightArrowAlt></p>
                    <h1 className='text-2xl md:text-3xl text-white'>BOOKING</h1>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-[#F9A51A] text-4xl md:text-7xl font-bold'>BOOKING</h1>
                </div>
            </div>
            
            <div className='container mx-auto my-20 flex flex-col lg:flex-row gap-10 justify-evenly items-center'>
                <div data-aos="fade-right" data-aos-duration="2000">
                    <form className='px-10 lg:p-0'>
                        <div className='flex gap-3'>
                            <input className='px-5 py-2 w-1/2 rounded bg-[#F4F4F4]' type="text" name="name" placeholder='Name' id="name" />
                            <input className='px-5 py-2 w-1/2 rounded bg-[#F4F4F4]' type="phone" name="number" placeholder='Number' id="number" />
                        </div> <br />
                        <div className='flex gap-3'>
                            <input className='px-5 py-2 w-1/2 rounded bg-[#F4F4F4]' type="email" name="email" placeholder='Email' id="email" />
                            <input className='px-5 py-2 w-1/2 rounded bg-[#F4F4F4]' type="date" name="date" id="date" placeholder='Date' />
                        </div> <br />
                        <textarea className='rounded bg-[#F4F4F4] px-5 py-2' placeholder='message' name="message" id="message" cols="30" rows="6"></textarea> <br />
                        <input type="submit" className='bg-[#F9A51A] py-2 w-1/4 rounded text-white font-medium text-2xl font-amatic' value="Submit" />
                    </form>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                    <h1 className='font-amatic text-center md:text-left text-2xl text-[#F9A51A] my-4'>BOOK A DATE</h1>
                    <h1 className='text-2xl text-center md:text-left md:text-5xl font-bold'>It’s your day, make it <br /> worth remembering.</h1>
                    <div className='flex gap-10 justify-center items-center my-4'>
                        <div className='space-y-2'>
                            <div className='flex justify-center items-center'>
                                <FaCheckCircle className='text-[#ABCE4E]'></FaCheckCircle>
                                <p>Awesome Decoration</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FaCheckCircle className='text-[#ABCE4E]'></FaCheckCircle>
                                <p>VIP security</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FaCheckCircle className='text-[#ABCE4E]'></FaCheckCircle>
                                <p>Amazing Food</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FaCheckCircle className='text-[#ABCE4E]'></FaCheckCircle>
                                <p>Great Work experience</p>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex justify-center items-center'>
                                <FaCheckCircle className='text-[#ABCE4E]'></FaCheckCircle>
                                <p>Skillful Organizer</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FaCheckCircle className='text-[#ABCE4E]'></FaCheckCircle>
                                <p>Brilliant Exhabition</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FaCheckCircle className='text-[#ABCE4E]'></FaCheckCircle>
                                <p>Awesome Decoration</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FaCheckCircle className='text-[#ABCE4E]'></FaCheckCircle>
                                <p>Amazing Decoration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'>
                <Memories></Memories>
            </div>
        </div>
    );
};

export default Booking;