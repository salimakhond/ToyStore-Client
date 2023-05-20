import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";
import Gallery from "../Gallery/Gallery";
import News from "../News/News";
import useTitle from "../../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";


const Home = () => {
    useTitle('Home')
    const [products, setProducts] = useState([]);
    const [activeBtn, setActiveBtn] = useState("");


    useEffect(() => {
        fetch(`http://localhost:5000/products/${activeBtn}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [activeBtn])

    const handleTabClick = (tabName) => {
        setActiveBtn(tabName);
    };

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            {
                <div className="px-5">
                    <div className="container m-auto">
                        <div className='w-2/3 m-auto text-center mb-14'>
                            <h2 className='text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4'>Popular in Store</h2>
                            <p className='text-[#757575]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet vero magni perspiciatis ad molestias in, cupiditate sit temporibus velit placeat, unde itaque repudiandae consequuntur delectus. Aut sapiente neque magni?</p>
                        </div>

                        <div className="text-center mb-10">
                            <div className="btn-group btn-group-vertical lg:btn-group-horizontal ">
                                <button
                                    style={{ textTransform: 'capitalize', borderRight: '2px solid #fff' }}
                                    onClick={() => handleTabClick("")}
                                    className={`btn American Doll ${activeBtn == "" ? " btn-active" : ""
                                        }`}>All Doll</button>
                                <button
                                    style={{ textTransform: 'capitalize', borderRight: '2px solid #fff' }}
                                    onClick={() => handleTabClick("American Doll")}
                                    className={`btn American Doll ${activeBtn == "American Doll" ? " btn-active" : ""
                                        }`}>American Doll</button>
                                <button
                                    style={{ textTransform: 'capitalize', borderRight: '2px solid #fff' }}
                                    onClick={() => handleTabClick("Baby Doll")}
                                    className={`btn Baby Doll ${activeBtn == "Baby Doll" ? " btn-active" : ""
                                        }`}>Baby Doll</button>
                                <button
                                    style={{ textTransform: 'capitalize' }}
                                    onClick={() => handleTabClick("Barbie Doll")}
                                    className={`btn Barbie Doll ${activeBtn == "Barbie Doll" ? " btn-active" : ""
                                        }`}>Barbie Doll</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                products.map(product => <ShopCategory
                                    key={product._id}
                                    product={product}
                                >

                                </ShopCategory>)
                            }
                        </div>
                    </div>
                </div>

            }
            <News></News>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;