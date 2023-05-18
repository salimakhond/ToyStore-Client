// import { useState } from "react";


const ShopCategory = ({ product }) => {

    // console.log(product)
    const { toyName, image, price, rating, subCategory, sellername, quantity, email, description } = product;


    
    return (

        <>
            


            <div className="bg-base-200 rounded-lg">
                <div className=" p-5 flex justify-between items-center gap-5 flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img className=" rounded-lg" src={image} />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl text-[#181D4E] font-bold">{toyName}</h2>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Price : ${price}</p>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Ratting : {rating}</p>

                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopCategory;