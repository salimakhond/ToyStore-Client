import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="py-[50px] md:py-[80px] lg:py-[130px] bg-white">
            <div className="">
                <div className="card m-auto w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-5xl font-bold text-center">Login</h2>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;