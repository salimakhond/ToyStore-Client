import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {
    useTitle('All Toys')

    const [searchValue, setSearchValue] = useState([]);
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-psi-henna.vercel.app/products')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://toy-marketplace-server-psi-henna.vercel.app/search/${searchValue}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data)
            })
    }

    return (
        <div className="px-5">
            <div className="container m-auto py-[30px] md:py-[50px] lg:py-[70px]">
                <div className="form-control">
                    <div className="input-group flex justify-center mb-8">
                        <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={() => handleSearch()} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
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
        </div>
    );
};

export default AllToys;