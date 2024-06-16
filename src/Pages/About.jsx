import imgae from '../assets/slider2.jpg'

const About = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 p-8 shadow-xl">
                <figure><img className='w-[600px]' src={imgae} alt="Album" /></figure>
                <div className="card-body">
                    <h2>ABOUT COMPANY</h2>
                    <h2 className="card-title">We help you build on your past</h2>
                    <p>Aliquam eros justo, posuere lobort, viverra laoreet augue mattii fermentum non ullamcorper viverra laoreet augue. posuere lobortis ,viverra</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;