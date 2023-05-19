import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product-by-email/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleDelete = (id) => {
        const proceed = confirm('confirm to to delete')
        if(proceed){
            fetch(`http://localhost:5000/product-by-email/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount>0){
                    alert('Delete successfully')
                    const remaining = toys.filter(toy=>toy?._id !== id);
                    setToys(remaining)
                }
            })
        }

    }


    return (
        <div className="container m-auto py-[50px] md:py-[80px] lg:py-[130px]">
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
                                    <td><button onClick={() => handleDelete(toy?._id)} className="btn btn-error">Delete</button></td>
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
    );
};

export default MyToys;