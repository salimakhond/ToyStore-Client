
const Gallery = () => {
    return (
        <div className="container py-[50px] md:py-[80px] lg:py-[130px] m-auto">
            <div className="w-full m-auto p-0 flex justify-center items-center flex-col lg:flex-row gap-16">
                <div className="w-1/2">
                    <div className="grid grid-cols-2 gap-5">
                        <img src="https://i.ibb.co/zxMj8Cf/post111-copyright.jpg" className=" rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/480pnCD/post9-copyright.jpg" className="rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/nLGxK7f/post11-copyright.jpg" className="rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/KmFtMRC/post10-copyright.jpg" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="w-3/4">
                        <p className="text-white font-bold mb-5 uppercase py-3 px-5 rounded-full inline-block bg-[#e3092f]">Gallery</p>
                        <h1 className="text-5xl font-bold capitalize">Check our featured photoshoots</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis ex nesciunt, dolor aspernatur illo similique iusto repellendus suscipit aliquid voluptatem in porro autem eaque recusandae debitis ipsa libero modi?</p>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis ex nesciunt, dolor aspernatur illo similique iusto repellendus suscipit aliquid voluptatem in porro autem eaque recusandae debitis ipsa libero modi?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;