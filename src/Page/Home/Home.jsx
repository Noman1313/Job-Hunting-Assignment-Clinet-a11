import banner from '../../assets/images/job search site.png'

const Home = () => {

    return (
        <div className="my-6">
            <div className="carousel-item relative w-full">
                <img src={banner} className="w-full rounded-xl" />
                <div className="absolute flex items-center  rounded-xl h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Find Your Jobs Here.</h2>
                        <p>Freelance writing, virtual assistance, graphic design, social media management, and online tutoring are great online job options. Explore platforms like Upwork, Fiverr, or RemoteOK for opportunities that match your skills.</p>
                        <div className=''>
                            <input type="text" placeholder="Type here"  className='input input-bordered w-full max-w-xs text-black' />
                            <button className="btn btn-primary ml-3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;