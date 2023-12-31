import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // console.log(user,loading);

    const location = useLocation();

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes={
    children: PropTypes.object
}