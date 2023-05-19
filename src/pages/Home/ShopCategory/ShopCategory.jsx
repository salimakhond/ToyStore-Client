


const ShopCategory = ({ product }) => {

    const { _id, toyName, image, price, rating } = product;

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

                    <button className="btn btn-primary">View Details</button>
                    {/* The button to open modal */}
                    <label htmlFor={_id} className="btn">open modal</label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={_id} className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{toyName}</h3>
                            <p className="py-4">Youve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div className="modal-action">
                                <label htmlFor={_id} className="btn">Yay!</label>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default ShopCategory;