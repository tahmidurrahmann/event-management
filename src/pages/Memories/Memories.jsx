import { FaUserAstronaut, FaUsers } from 'react-icons/fa';
import { IoDiamondOutline } from "react-icons/io5";
const Memories = () => {
    return (
        <div className="my-4 md:my-10">
            <div className="text-center">
                <h3 className="text-xl text-[#F9A51A] mb-2">WHY CHOOSE US</h3>
                <h1 className="text-2xl md:text-4xl font-extrabold">Making Moments In To <br /> Memories</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-16 p-8'>
                <div className='bg-gray-100 p-20 rounded-lg space-y-4'>
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <FaUserAstronaut></FaUserAstronaut>
                    </div>
                    <h1 className='text-xl text-[#F9A51A] font-bold'>Free Consultations</h1>
                    <p className='text-[#1C1B1B99]'>We will listen to your ideas, preferences, and expectations to understand your vision for the event.</p>
                </div>
                <div className='bg-gray-100 p-20 rounded-lg space-y-4'>
                <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <FaUsers></FaUsers>
                    </div>
                    <h1 className='text-xl text-[#F9A51A] font-bold'>Certified Expert</h1>
                    <p className='text-[#1C1B1B99]'>Our Certified Expert has undergone rigorous training and certification in birthday event management. </p>
                </div>
                <div className='bg-gray-100 p-20 rounded-lg space-y-4'>
                <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <IoDiamondOutline></IoDiamondOutline>
                    </div>
                    <h1 className='text-xl text-[#F9A51A] font-bold'>Premium material</h1>
                    <p className='text-[#1C1B1B99]'>You will receive VIP treatment.Your comfort, satisfaction, and privacy are our top priorities.</p>
                </div>
            </div>

        </div>
    );
};

export default Memories;