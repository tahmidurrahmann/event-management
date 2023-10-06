import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Service = () => {

    const [eventDetail, setEventDetail] = useState({});

    const { id } = useParams();
    const details = useLoaderData();

    useEffect(() => {
        const findDetail = details.find(detail => detail.id == id);
        setEventDetail(findDetail);

    }, [details, id])

    const { name, price, description, imageUrl } = eventDetail;

    return (
        <div className="p-10 lg:p-0">
            <div className="card bg-base-100 shadow-xl my-6">
                <img className="rounded-t-lg" src={imageUrl} alt={`${imageUrl} of Course`} />
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="my-2 text-xl font-bold">Event Cost:  ${price}</p>
                    <p className="mb-2 text-[#1C1B1B99]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;