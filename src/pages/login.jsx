import "../index.css";
import h1 from "./bg/77.png";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export const Login = () => {

    return(
        <div className="wrapperlog">
            <img src={h1} alt="" className="loginimg"/>
        <div className="loginp">
            <div className="form1">
                <span className="fontl">LOGIN</span>
                <hr/>
                <form>
                    <div className="three">
                        <Stack direction="column" spacing={2}>
                            <TextField style={{margin: 2}} id="user" label="Username" variant="outlined" />
                            <TextField id="user" label="Password" type="password" variant="outlined" />
                            <Link to="/home">
                                <Button variant="contained" style={{ marginTop: "10px" ,padding: "10px 70px" ,backgroundColor: "#19f39b"}}>Login</Button> 
                            </Link>
                        </Stack>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}


