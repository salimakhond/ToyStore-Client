import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";


const Home = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])






    return (
        <div>
            <Banner></Banner>
            {
                <div>
                    

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            products.map(product => <ShopCategory
                                key={product._id}
                                product={product}
                            >

                            </ShopCategory>)
                        }
                    </div></div>

            }
        </div>
    );
};

export default Home;