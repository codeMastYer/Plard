import Header from './components/header/Header';
import Routes from './components/Routes';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/slices/userSlice.js";

function App() {
    const {loadingUser} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUser())
    }, [])
    if(loadingUser){
        return null
    }
    return (
        <div>
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;