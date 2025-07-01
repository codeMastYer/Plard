import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getUser} from "../../redux/slices/userSlice.js";


const Auth = ({children}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <div>
            {children}
        </div>
    );
};

export default Auth;