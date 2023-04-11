import "../index.css";
import h1 from "./bg/1.png";


export const Teams = () => {
    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
        <div className="homep">
            <div className="form2">
                <h1 className="head"><i>PSL Stats</i></h1>
                
                    <a className="nav1"><h3>Home</h3></a>
                    <a className="nav1"><h3>Teams</h3></a>
                    <a className="nav1"><h3>Players</h3></a>
                    <a className="nav1"><h3>About</h3></a>
            </div>
        </div>
    </div>
    );
}
