import { Link, useLoaderData } from "react-router-dom";


const AllToys = () => {

    const allToys = useLoaderData();

    return (
        <div className="container m-auto py-[30px] md:py-[50px] lg:py-[70px]">
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
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(toy =>

                                <tr key={toy._id}>
                                    <td>{toy?.sellername}</td>
                                    <td>{toy?.toyName}</td>
                                    <td>{toy?.subCategory}</td>
                                    <td>${toy?.price}</td>
                                    <td>{toy?.quantity}</td>
                                    <td><button className="btn btn-primary"><Link to={`/toysDetails/${toy._id}`}>View Details</Link></button></td>
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
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllToys;