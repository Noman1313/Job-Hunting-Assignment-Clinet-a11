

const Home = () => {
    
    return (
        <div className="">
            <h1 className="text-5xl font-bold text-center text-zinc-400 my-10">Find Your Jobs Here</h1>
            <div className="text-center mb-10">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary ml-5">Search</button>
            </div>
            
        </div>
    );
};

export default Home;