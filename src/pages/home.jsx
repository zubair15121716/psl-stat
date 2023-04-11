import "../index.css";
import h1 from "./bg/1.png";
import h2 from "./pana.png";
import { Link } from "react-router-dom";
import 'primeicons/primeicons.css';
import { Avatar } from 'primereact/avatar'; 
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { Card } from 'primereact/card';
import { motion } from "framer-motion";

export const Home = () => {
    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
            <div  className="homep">
                <div className="form2">
                    <h1 className="head"><i>PSL Stats</i></h1>                
                        <Link to='/home' className='nav1'>
                        <a><h3>Home</h3></a>
                        </Link>
                        <Link to='/teams' className='nav1'>
                        <a><h3>Teams</h3></a>
                        </Link>
                        <a className="nav1"><h3>Players</h3></a>
                        <a className="nav1"><h3>About</h3></a>
                        <Avatar id='nav1' icon="pi pi-user" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                </div>
                <div className="des">
                    <div className="para">
                        <Card title="Pakistan Super League">
                            <p className="m-0">
                            The Pakistan Super League (PSL) is a professional franchise-based Twenty20 cricket league in Pakistan. The tournament was launched in 2015 and has quickly gained popularity among cricket enthusiasts around the world. With six teams representing major cities in Pakistan, the league features top international and local players competing against each other in a month-long tournament. 
                            </p>
                        </Card>
                    </div>
                    <motion.img animate={{x:50}}id="h2" src={h2} alt="img"></motion.img>
                </div>
        </div>
    </div>
    );
}
