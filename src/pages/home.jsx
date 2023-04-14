import "../index.css";
import h1 from "./bg/1.png";
import h2 from "./pana.png";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "framer-motion";
import React from "react";


const card = (
    <React.Fragment>
      <CardContent>
            <h2>Pakistan Super League</h2>
            <p className="m-0">
                The Pakistan Super League (PSL) is a professional franchise-based Twenty20 cricket league in Pakistan. The tournament was launched in 2015 and has quickly gained popularity among cricket enthusiasts around the world. With six teams representing major cities in Pakistan, the league features top international and local players competing against each other in a month-long tournament. 
            </p>
      </CardContent>
    </React.Fragment>
  );

export const Home = () => {
    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
            <div  className="homep">
                <div className="form2">
                    <h1 className="head"><i>PSL Stats</i></h1>                
                        <Link to='/home' className='nav1'>
                        <h3>Home</h3>
                        </Link>
                        <Link to='/teams' className='nav1'>
                        <h3>Teams</h3>
                        </Link>
                        <a className="nav1"><h3>Players</h3></a>
                        <a className="nav1"><h3>About</h3></a>
                        <Avatar alt="Remy Sharp" src={h2} />
                </div>
                <div className="des">
                    <div className="para">
                        <Card variant="outlined">{card}</Card>
                    </div>
                    <motion.img transition={ {duration:2} } initial={{opacity: 0}} animate={{x:50 , opacity:1}}id="h2" src={h2} alt="img"></motion.img>
                </div>
        </div>
    </div>
    );
}
