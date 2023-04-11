import "../index.css";
import h1 from "./bg/2 copy.jpg";
import {Link} from "react-router-dom";


export const Login = () => {
    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
        <div className="loginp">
            <div className="form1">
                <span className="fontl">LOGIN</span>
                <hr/>
                <form>
                    <div className="three">
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <Link to="/home">
                            <button type="submit">Login</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

