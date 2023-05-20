import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToys = () => {
    const updateToy = useLoaderData();

    const { _id } = updateToy;

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:5000/product-by-id/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your toy update is successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    };

    return (
        <div className="container m-auto py-[50px] md:py-[80px] lg:py-[130px] bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="form-control">
                        {/* <input type="text" {...register("Toy Name")} placeholder="Toy Name" name="name" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("toyName")}
                            placeholder="Toy Name"
                        //   defaultValue="Web developer"
                        />
                    </div>

                    <div className="form-control">
                        {/* <input type="text" {...register("Seller Name")} placeholder="Seller Name" name="name" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("sellername", { required: true })}
                            placeholder="Seller Name"
                        // defaultValue="30k"
                        />
                    </div>
                    <div className="form-control">
                        {/* <input type="text" {...register("price")} placeholder="Price" name="price" className="input input-bordered" /> */}
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
                        {/* <input type="text" {...register("image")} placeholder="Image" name="image" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("image")}
                            placeholder="Image Link"
                            type="url"
                            defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                        {/* <input type="text-input" {...register("email")} placeholder="Email" type="email" className="input input-bordered" /> */}
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
    );
};

export default UpdateToys;