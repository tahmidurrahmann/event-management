import { Link } from "react-router-dom";

const Services = ({ single }) => {
    const { id, name, price, description, imageUrl } = single;
    return (
            <div className="card bg-gray-100 shadow-xl">
                <img className="md:h-[250px] lg:h-[300px] rounded-t-lg" src={imageUrl} alt={`${imageUrl} of Course`} />
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="my-2 text-xl font-bold">Event Cost:  ${price}</p>
                    <p className="mb-2 text-[#1C1B1B99]">{description.slice(0, 140)}....</p>
                    <div className="card-actions justify-center mb-4">
                        <Link to={`/services/${id}`}><button className="bg-[#F9A51A] py-3 px-6 rounded-lg text-white font-medium">See Details</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Services;