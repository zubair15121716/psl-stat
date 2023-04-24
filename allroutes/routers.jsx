import { Route, Routes as Router } from "react-router";
import {Home} from "../src/pages/home.jsx";
import {Login} from "../src/pages/login.jsx";
import {Teams} from "../src/pages/teams.jsx";
import { IntroTeams } from "../src/pages/teamcarosuel.jsx";
import { Hightotal } from "../src/pages/hightotal.jsx";
import { PlayerHigh } from "../src/pages/playershigh.jsx";
import { PlayerHighw } from "../src/pages/mostwicket.jsx";
import { PlayerHighInd } from "../src/pages/playerIndrun.jsx";
import {TeamStat} from "../src/pages/teamstats.jsx";

export const Routes = () => {
    return(
        <Router>
            <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Login/>}/>
            <Route path='/teams' element={<Teams/>}/>
            <Route path='/introTeams' element={<IntroTeams/>}/>
            <Route path='/hightotal' element={<Hightotal/>}/>
            <Route path='/players' element={<PlayerHigh/>}/>
            <Route path="/playerswic" element={<PlayerHighw/>}/>
            <Route path='/playersind' element={<PlayerHighInd/>}/>
            <Route path="/teamstats" element={<TeamStat/>}/>
        </Router>
    );
}

