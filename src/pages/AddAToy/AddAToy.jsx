import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const AddAToy = () => {
    useTitle('Add A Toy')

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://toy-marketplace-server-psi-henna.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };


    return (
        <div className="px-5">
            <div className="container m-auto py-[50px] md:py-[80px] lg:py-[130px] bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("toyName")}
                                placeholder="Toy Name"
                            />
                        </div>

                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("sellername", { required: true })}
                                placeholder="Seller Name"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                            />
                        </div>
                        <div className="form-control">
                            <select className="input input-bordered" {...register("subCategory")}>
                                <option value="American Doll">American Doll</option>
                                <option value="Baby Doll">Baby Doll</option>
                                <option value="Barbie Doll">Barbie Doll</option>

                            </select>
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("image")}
                                placeholder="Image Link"
                                type="url"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("rating")}
                                placeholder="Rating"
                                type="text"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                value={user?.email}
                                {...register("email")}
                                placeholder="your email"
                                type="email"
                            />

                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("quantity")}
                                placeholder="Quantity"
                                type="text"
                            />
                        </div>
                    </div>
                    <input
                        className="mt-6 w-full input input-bordered"
                        {...register("description")}
                        placeholder="description"
                        type="text"
                    />
                    <div className="form-control mt-6">
                        <input className="btn btn-primary  mx-auto" value="Add a Toy" type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAToy;