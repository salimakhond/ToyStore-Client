

const Blog = () => {
    return (
        <>
            <div className='container m-auto py-[50px] md:py-[80px] lg:py-[130px]'>
                <div className='mb-8'>
                    <h3 className='text-[#1A1919] font-bold text-xl mb-4'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h3>
                    <p className='text-[#757575] text-lg font-medium'>Ans: Access Token: An access token is a credential that is issued to a user after a successful authentication process. It represents the users authorization to access specific resources or perform certain actions. Access tokens typically have a limited lifespan and expire after a certain period of time. <br />
                    Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to reauthenticate. Refresh tokens are typically issued alongside the access token during the initial authentication process.</p>
                </div>
                <div className='mb-8'>
                    <h3 className='text-[#1A1919] font-bold text-xl mb-4'>2. Compare SQL and NoSQL databases?</h3>
                    <p className='text-[#757575] text-lg font-medium'>Ans: SQL databases Data is organized into tables with rows and columns, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    </p>
                </div>
                <div className='mb-8'>
                    <h3 className='text-[#1A1919] font-bold text-xl mb-4'>3. What is express js? What is Nest JS?
                    </h3>
                    <p className='text-[#757575] text-lg font-medium'>Ans: Express JS : Express.js is a popular and lightweight web application framework for Node.js, a JavaScript runtime environment. It provides a set of features and utilities that make it easier to build web applications and APIs. <br /> Nest JS : Nest JS is a server-side Node. js framework thats great for building highly testable and maintainable backend applications</p>
                </div>
                <div className=''>
                    <h3 className='text-[#1A1919] font-bold text-xl mb-4'>4. What is MongoDB aggregate and how does it work?</h3>
                    <p className='text-[#757575] text-lg font-medium'>Ans: MongoDB aggregate is a powerful framework that allows you to perform advanced data processing and analysis operations on MongoDB collections. It provides a way to combine multiple stages of data processing operations into a single pipeline, allowing you to transform, filter, group, and analyze your data in a flexible and efficient manner.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;