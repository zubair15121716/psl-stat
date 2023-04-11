import "../index.css";
import h1 from "./bg/1.png";
import h2 from "./pana.png";
import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
        <div className="homep">
            <div className="form2">
                <h1 className="head"><i>PSL Stats</i></h1>
                
                    <a className="nav1"><h3>Home</h3></a>
                    <Link to='/teams'>
                    <a className="nav1"><h3>Teams</h3></a>
                    </Link>
                    <a className="nav1"><h3>Players</h3></a>
                    <a className="nav1"><h3>About</h3></a>
            </div>
            <div className="des">
                <div className="para">
                    <h2>Pakistan Super League</h2>
                    <p>The Pakistan Super League (PSL) is a professional franchise-based Twenty20 cricket league in Pakistan. The tournament was launched in 2015 and has quickly gained popularity among cricket enthusiasts around the world. With six teams representing major cities in Pakistan, the league features top international and local players competing against each other in a month-long tournament. </p>
                </div>
                <img id='h2' src={h2} alt="img"></img>
            </div>
        </div>
    </div>
    );
}
