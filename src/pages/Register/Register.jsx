import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";


const Register = () => {

    useTitle('Register')

    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');

    const [registerError, setRegisterError] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        setSuccess('')
        setRegisterError('')
        console.log(name, email, photo, password)
        if (password.length < 6) {
            setRegisterError('Please Add Minimum 6 Characters');
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess('Create a User Successfully Done')
                UpdateUserData(result.user, name, photo)
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }

    const UpdateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('User Data Update');
            })
            .catch(error => {
                console.error(error.message);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="px-5 py-[50px] md:py-[80px] lg:py-[130px] bg-white">
            <div className="">
                <div className="card m-auto w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-5xl font-bold text-center">Register</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required />
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
                        <p className='my-5 text-center'>All Ready Have An Account ?
                            <Link className='text-orange-500 font-bold ml-3' to='/login'>Login</Link>
                        </p>
                        <p className="text-success text-center">{success}</p>
                        <p className="text-error text-center">{registerError}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;