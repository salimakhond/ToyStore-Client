

const AboutUs = () => {
    return (
        <div className="px-5">
            <div className="container pb-[50px] md:pb-[80px] lg:pb-[130px] m-auto">
                <div className="w-full m-auto p-0 flex justify-center items-center flex-col lg:flex-row-reverse">
                    <div className="w-full lg:w-1/2">
                        <img src="https://i.ibb.co/5TCvNNC/post26-copyright.jpg" className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="w-full lg:w-3/4">
                            <p className="text-white font-bold mb-5 uppercase py-3 px-5 rounded-full inline-block bg-[#e3092f] mt-8 lg:mt-0">WHAT WE DO</p>
                            <h1 className="text-5xl font-bold capitalize">We help organize events for kids</h1>
                            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis ex nesciunt, dolor aspernatur illo similique iusto repellendus suscipit aliquid voluptatem.</p>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis ex nesciunt, dolor aspernatur illo similique.</p>
                            <button className="btn btn-primary mt-8">About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;