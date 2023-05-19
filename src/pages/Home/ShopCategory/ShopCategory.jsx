import { Link } from "react-router-dom";

const ShopCategory = ({ product }) => {

    const {_id, toyName, image, price, rating } = product;

    return (
        <div className="bg-base-200 rounded-lg">
            <div className=" p-5 flex justify-between items-center gap-5 flex-col lg:flex-row">
                <div className="w-1/2">
                    <img className=" rounded-lg" src={image} />
                </div>
                <div className="w-1/2">
                    <h2 className="text-2xl text-[#181D4E] font-bold">{toyName}</h2>
                    <p className="text-[#646672] my-3 text-lg font-semibold">Price : ${price}</p>
                    <p className="text-[#646672] my-3 text-lg font-semibold">Ratting : {rating}</p>
                    <button className="btn btn-primary"><Link to={`/toysDetails/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;