import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { userRegister } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [registerSuccsess, setRegisterSuccsess] = useState('');

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        setRegisterError('')
        setRegisterSuccsess('')

        if (password.length < 6) {
            setRegisterError('Password Should be at least 6 cheractars or longer')
            return;
        }
        else if(!/[A-Z]/.test(password)) {
            setRegisterError('Password should be at least Upercase')
            return;
        }
        userRegister(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                setRegisterSuccsess('User Create Succsessfully')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        registerSuccsess && <p className="text-green-600">{registerSuccsess}</p>
                    }
                    <p>Already haven Account Please? <Link to='/login' className="btn btn-link">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;