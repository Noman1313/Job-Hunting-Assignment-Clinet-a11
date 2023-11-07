import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/job hunting.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allJobs'>All Jobs</NavLink></li>
        <li><NavLink to='/appliedJobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/addAJobs'>Add A Job</NavLink></li>
        <li><NavLink to='/myJobs'>My Jobs</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
    </>

    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log('Noman', result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-gray-100 rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32 ">
                        {NavLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={logo} className="h-8 mr-3 rounded-md" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Job Hunter</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end ">
                {user?.email ?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL}/>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32">
                            <li><a>{user?.displayName}</a></li>
                            <li><a>Profile</a></li>
                            <li><Link to='/' onClick={handleLogout}>Logout</Link></li>
                        </ul>
                    </div>
                    : <button className='btn btn-ghost'><Link to='/login'>Log In</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;