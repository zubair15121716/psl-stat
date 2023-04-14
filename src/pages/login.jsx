import "../index.css";
import h1 from "./bg/2 copy.jpg";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export const Login = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
        <div className="loginp">
            <div className="form1">
                <span className="fontl">LOGIN</span>
                <hr/>
                <form>
                    <div className="three">
                        <TextField id="user" label="Username" variant="outlined" />
                        <TextField id="user" label="Password" variant="outlined" />
                        <Link to="/home">
                            <Button color="secondary">Secondary</Button> 
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

