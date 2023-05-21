import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const ShopCategory = ({ product }) => {

    const { _id, toyName, image, price, rating } = product;

    const { user } = useContext(AuthContext);


    useEffect(() => {
        AOS.init();
    }, []);

    const handleAlert = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to log in first to view details!',
            })
        }
    }
    return (
        <div className="bg-base-200 rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="300"
        >
            <div className=" p-5 flex justify-between items-center gap-5 flex-col lg:flex-row">
                <div className="w-1/2">
                    <img className=" rounded-lg" src={image} alt="Toy" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-2xl text-[#181D4E] font-bold">{toyName}</h2>
                    <p className="text-[#646672] my-3 text-lg font-semibold">Price : ${price}</p>
                    <div className="flex items-center my-3 text-lg font-semibold">
                        <p className="text-[#646672]">Rating: {rating}</p>
                        <Rating className='ml-2' style={{ maxWidth: 80 }} value={rating || 0} readOnly />
                    </div>
                    <button onClick={() => handleAlert()} className="btn btn-primary"><Link to={`/toysDetails/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;