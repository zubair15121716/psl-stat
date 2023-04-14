import "../index.css";
import h1 from "./bg/1.png";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Pslchamp } from "../assets/data/pslchamp";
import Stack from '@mui/material/Stack';
import Carousel from 'react-material-ui-carousel';
import { Item } from "../components/item";


export const IntroTeams = () => {
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
                <Link to="/teams"><Button variant="outlined"  sx={{ margin: 1 }}color="success">Winners</Button> </Link>
                <Link to="/home"><Button variant="outlined" sx={{ margin: 1 }} color="success">Highest Totals</Button> </Link>
            </Stack>
            <h1 id="heading1">Champions of PSL &#127881; </h1>
            <Carousel>
            { 
                Pslchamp.map( (params) => <Item im={params}/>)
            }
            </Carousel>
        </div>
    </div>
    );
}
