import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const UpdateToys = () => {
    useTitle('Update Toys')
    const updateToy = useLoaderData();

    const { _id, toyName, sellername, price, image, rating, quantity, description } = updateToy;

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`https://toy-marketplace-server-psi-henna.vercel.app/product-by-id/${_id}`, {
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
                                defaultValue={toyName}
                            />
                        </div>

                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("sellername", { required: true })}
                                placeholder="Seller Name"
                                defaultValue={sellername}
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                                defaultValue={price}
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
                                defaultValue={image}
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("rating")}
                                placeholder="Rating"
                                type="text"
                                defaultValue={rating}
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
                                defaultValue={quantity}
                            />
                        </div>
                    </div>
                    <input
                        className="mt-6 w-full input input-bordered"
                        {...register("description")}
                        placeholder="description"
                        type="text"
                        defaultValue={description}
                    />
                    <div className="form-control mt-6">
                        <input className="btn btn-primary  mx-auto" value="Update a Toy" type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateToys;