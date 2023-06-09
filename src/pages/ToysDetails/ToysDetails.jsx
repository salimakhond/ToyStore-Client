import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useTitle from "../../hooks/useTitle";

const ToysDetails = () => {
    useTitle('Toy Details')

    const toyDetails = useLoaderData();

    const { toyName, image, rating, price, subCategory, sellername, quantity, email, description } = toyDetails;
    return (
        <div className="px-5">
            <div className="container m-auto my-[50px] md:my-[80px] lg:my-[80px] bg-base-200 rounded-lg">
                <div className="p-10 lg:p-16 flex justify-center items-center gap-14 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3">
                        <img className=" rounded-lg" src={image} />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-2xl text-[#181D4E] font-bold">Toy Name : {toyName}</h2>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Seller Name : {sellername}</p>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Email : {email}</p>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Price : ${price}</p>
                        <div className="flex items-center my-3 text-lg font-semibold">
                            <p className="text-[#646672]">Rating: {rating}</p>
                            <Rating className='ml-2' style={{ maxWidth: 80 }} value={rating || 0} readOnly />
                        </div>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Quantity : {quantity}</p>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Sub Category : {subCategory}</p>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Description : {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;