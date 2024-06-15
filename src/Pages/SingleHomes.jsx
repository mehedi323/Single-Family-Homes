import { useEffect, useState } from "react";
import SingleHome from "./SingleHome";



const SingleHomes = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('Family.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <div className="my-8">
                <h2 className="text-4xl font-bold text-center">Your Dream All Home</h2>
                <p className=" w-2/3 text-center mx-auto">And In Order To Make A Business, Brand Advertising And Marketing Plays
                    An Important Role. Similarly, In Making Cultivation Business A Brand,
                    Good Slogans Are Necessary.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
                    {
                        users.map(user => <SingleHome key={user.id} user={user}></SingleHome>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleHomes;