import "../index.css";
import h1 from "./bg/1.png";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { WicketPlayers } from "../assets/data/score";
import Stack from '@mui/material/Stack';
import Carousel from 'react-material-ui-carousel';
import { Item } from "../components/item";


export const PlayerHighw = () => {
    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
        <div className="homep">
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
            </div>
            <Stack direction="row" spacing={2}>
                <Link to="/players"><Button variant="outlined"  sx={{ margin: 1 }}color="success">Most Runs</Button> </Link>
                <Link to="/playerswic"><Button variant="outlined" sx={{ margin: 1 }} color="success">Most Wickets</Button> </Link>
                <Link to="/playersind"><Button variant="outlined" sx={{ margin: 1 }} color="success">Highest score </Button> </Link>
            </Stack>
            <h1 id="heading1">Most Wickets (By Individuals) &#x1f4a5; </h1>
            <Carousel>
            { 
                WicketPlayers.map( (params) => <Item im={params} score={true}/>)
            }
            </Carousel>
        </div>
    </div>
    );
}
