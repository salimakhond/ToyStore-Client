

const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: `url("https://i2.netflixmovies.com/dibsl9ebc/image/upload/w_1920,h_800,c_fill,g_faces,q_62/sjmt7luxdgnntp4frlh8.jpg")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Pick the best toy for our kids.</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;