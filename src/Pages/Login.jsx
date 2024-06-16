import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginSuccsess, setLoginSuccsess] = useState('');
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setLoginError('')
        setLoginSuccsess('')

        if (password.length < 6) {
            setLoginError('Password Should be at least 6 cheractars or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('Password should be at least Upercase')
            return;
        }
        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                navigate('/')
                setLoginSuccsess('User Login Successfully')
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.massage)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        loginError && <p className="text-red-700">{loginError}</p>
                    }
                    {
                        loginSuccsess && <p className="text-green-600">{loginSuccsess}</p>
                    }
                    <p>New Here Please? <Link to='/register' className="btn btn-link">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;