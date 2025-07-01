import  "./bg.css"

function Bg({children}) {
    return (<div className="loginDiv flex justify-center items-center">
        {children}
    </div>)
}

export default Bg