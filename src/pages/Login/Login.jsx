import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";


const Login = () => {
    useTitle('Login')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, googleSignIn } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setSuccess('')
        signIn(email, password)
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser);
                setSuccess('Login a User Successfully');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                navigate(from, { replace: true });
                setSuccess('Login a User Successfully');
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div className="px-5 py-[50px] md:py-[80px] lg:py-[130px] bg-white">
            <div className="">
                <div className="card m-auto w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-5xl font-bold text-center">Login</h2>
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='my-5 text-center'>New to Toy Marketplace?
                            <Link className='text-orange-500 font-bold ml-3' to='/register'>Register</Link>
                        </p>
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <button onClick={handleGoogleSignIn} className=" btn btn-circle btn-outline btn-error hover:text-white">
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                        <p className="text-success text-center">{success}</p>
                        <p className="text-error text-center">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;