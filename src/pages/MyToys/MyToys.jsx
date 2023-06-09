import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { FaRegTrashAlt } from "react-icons/fa";


const MyToys = () => {
    useTitle('My Toys')

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sort, setSort] = useState('sort');

    useEffect(() => {
        fetch(`https://toy-marketplace-server-psi-henna.vercel.app/product-by-email/${user?.email}/${sort}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user, sort])

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete this toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-marketplace-server-psi-henna.vercel.app/product-by-email/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted successfully',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy?._id !== id);
                            setToys(remaining)
                        }
                    })
            }
        })

    }


    return (
        <div className="px-5">
            <div className="container m-auto py-[30px] md:py-[50px] lg:py-[70px]">
                <div className="flex justify-center mb-12">
                    <select value={sort} onChange={(e) => setSort(e.target.value)} className="select bg-blue-500 text-white font-semibold">
                        <option className="font-semibold p-2" value='sort'>Price Sort</option>
                        <option className="font-semibold p-2" value='true'>Ascending Price</option>
                        <option className="font-semibold p-2" value='false'>Descending Price</option>
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                toys.map(toy =>

                                    <tr key={toy._id}>
                                        <td>{toy?.sellername}</td>
                                        <td>{toy?.toyName}</td>
                                        <td>{toy?.subCategory}</td>
                                        <td>${toy?.price}</td>
                                        <td>{toy?.quantity}</td>
                                        <td><button className="btn btn-primary"><Link to={`/updateToys/${toy?._id}`}>Update</Link></button></td>
                                        <td><button onClick={() => handleDelete(toy?._id)} className="btn btn-error"><FaRegTrashAlt className="text-white"></FaRegTrashAlt></button></td>
                                    </tr>

                                )
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;