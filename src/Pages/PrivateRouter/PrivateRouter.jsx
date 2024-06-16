import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom"; 
import PropTypes from 'prop-types';

 
 const PrivateRouter = ({children}) => {
     const {user , loading} = useContext(AuthContext);
     if(loading){
        return <span className="loading loading-dots loading-sm"></span>
     }
     if(user){
        return children;
     }
     return <Navigate to='/login'>Login</Navigate>
 };
 
 export default PrivateRouter;
 PrivateRouter.propTypes={
    children: PropTypes.node,
}