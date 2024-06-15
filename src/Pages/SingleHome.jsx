
const SingleHome = ({ user }) => {
    const { estate_title, price, area, description, image } = user;
    return (
        <div className="card card-compact mt-6 w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="flex items-center justify-between border-y-2 py-4 rounded-lg border-gray-200">
                    <h2 className="font-medium text-xl">Price: {price}$</h2> 
                    <h2 className="font-medium text-xl">Area: {area}</h2> 
                </div>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleHome;