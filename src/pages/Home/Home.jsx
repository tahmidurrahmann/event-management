import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
const Home = () => {

    const eventData = useLoaderData();
    console.log(eventData);

    return (
        <div>
            <Banner></Banner>
            <div className="my-20">
                <h3 className="text-[#F9A51A] text-center text-xl my-2">What We Offer</h3>
                <h1 className="text-3xl text-center mb-6 font-bold">Awesome Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                    {
                        eventData.map(single => <Services single={single} key={single.id}></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;