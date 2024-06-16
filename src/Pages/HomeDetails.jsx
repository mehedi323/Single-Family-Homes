import { useLoaderData, useParams } from "react-router-dom";

  
const HomeDetails = () => {
    const homes = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const home = homes.find(home => home.id == idInt)
    return (
        <div> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 p-16 flex justify-center bg-gray-100">
                <img className="w-[400px]" src={home.image} alt="" />
            </div>
            <div className="col-span-2 p-6 space-y-4">
                <h2 className="text-3xl font-bold ">{home.estate_title}</h2>
                <h3>By: {home.view_property_button}</h3>
                <h4 className="border-y-2 border-gray-200 py-4">{home.status}</h4>
                <h3><span className="font-bold">Review: </span>{home.description}</h3>
                <div className="flex items-center gap-3 border-b-2 py-4 border-gray-200">
                    <h2 className="font-bold ">facilities:</h2>
                    <button className="btn text-green-600">{home.facilities[0]}</button>
                    <button className="btn text-green-600">{home.facilities[1]}</button>
                </div>
                <div className="flex  gap-10">
                    <div className="font-bold">
                        <ul>
                        <li>Price:</li>
                        <li>Segment Name:</li>
                        <li>Area: </li>
                        <li>Location:</li>
                        </ul>
                    </div>
                    <div className="font-bold">
                        <ul>
                            <li>{home.price}$</li>
                            <li>{home.segment_name}</li>
                            <li>{home.area}</li>
                            <li>{home.location}</li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div> 
    </div>
    );
};

export default HomeDetails;