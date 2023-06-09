import "../index.css";
import h1 from "./bg/1.png";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { PslTeams } from "../assets/data/pslchamp";
import Stack from '@mui/material/Stack';
import { motion } from "framer-motion";

const columns = [
    {field: 'id', headerName: 'S No', width: 90 },
    {
        field: 'img',
        headerName: '',
        width: 100,
        renderCell: (params) => <img id={"img"} height={50} src={params.value} />
    },
    {
      field: 'Team',
      headerName: 'Team',
      width: 150,
      editable: false,
    },
    {
      field: 'Match',
      headerName: 'Matches Played',
      width: 150,
      editable: false,
    },
    {
        field: 'won',
        headerName: 'Matches Won',
        width: 150,
        editable: false,
      },
      {
        field: 'lost',
        headerName: 'Matches Lost',
        width: 150,
        editable: false,
      },
    
];




export const TeamStat = () => {
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
                    <Link to='/players' className='nav1'><h3>Players</h3></Link>
                    <a className="nav1"><h3>About</h3></a>
            </div>
            <Stack direction="row" spacing={2}>
                <Link to="/introTeams"><Button variant="outlined"  sx={{ margin: 1 }}color="success">Champions</Button> </Link>
                <Link to="/teams"><Button variant="outlined" sx={{ margin: 1 }} color="success">Winners</Button> </Link>
                <Link to="/hightotal"><Button variant="outlined" sx={{ margin: 1 }} color="success">Highest Totals</Button> </Link>
            </Stack>
            <h1 id="heading1">Winners</h1>
            <motion.div initial={{opacity: 0}}
                        transition={{duration: 1.4}}
                        animate={{opacity: 1}} className="card">
                    <DataGrid
                        rows={PslTeams}
                        columns={columns}
                        initialState={{
                            pagination: {
                              paginationModel: {
                                pageSize: 5,
                              },
                            },
                          }}
                          pageSizeOptions={[5]}
                          autoHeight={true}
                    />
        </motion.div>
        </div>
    </div>
    );
}
