import { Route, Routes as Router } from "react-router";
import {Home} from "../src/pages/home.jsx";
import {Login} from "../src/pages/login.jsx";
import {Teams} from "../src/pages/teams.jsx";
import { IntroTeams } from "../src/pages/teamcarosuel.jsx";

export const Routes = () => {
    return(
        <Router>
            <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Login/>}/>
            <Route path='/teams' element={<Teams/>}/>
            <Route path='/introTeams' element={<IntroTeams/>}/>
        </Router>
    );
}

