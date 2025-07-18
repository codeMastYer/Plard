import Header from './components/header/Header';
import Routes from './components/Routes';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/slices/userSlice.js";
import Bg from "./components/backgroundImage/Bg.jsx";

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
          <Bg>
              <Routes/>
          </Bg>
        </div>
    );
}

export default App;