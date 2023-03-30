import "../index.css";
import h1 from "./background-07.png";


export const Login = () => {
    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
        <div className="loginp">
            <div className="form1">
                <span className="fontl"><i>LOGIN</i></span>
                <hr/>
                <form>
                    <div className="three">
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

