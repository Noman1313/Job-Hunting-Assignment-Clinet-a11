import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate()

    const handleLogin = event =>{
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(Error=>{
            console.log(Error);
        })
    }
    return (
        <div className="flex justify-center mt-28">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleLogin} className="space-y-6" >
                    <h5 className="text-xl font-bold text-center text-gray-900 dark:text-white">Login  Now</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to='/register' className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                    <GoogleLogin></GoogleLogin>
                </form>
            </div>
        </div>

    );
};

export default Login;