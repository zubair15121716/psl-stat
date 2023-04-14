import "../index.css";
import h1 from "./bg/1.png";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { Pslchamp } from "../assets/data/pslchamp";
import Stack from '@mui/material/Stack';
import { motion } from "framer-motion";

const columns = [
    {field: 'id', headerName: 'S No', width: 90 },
    {
      field: 'Team',
      headerName: 'Team',
      width: 150,
      editable: true,
    },
    {
      field: 'Year',
      headerName: 'Season',
      width: 150,
      editable: true,
    },
    {
      field: 'img',
      headerName: 'Logo',
      width: 100,
      renderCell: (params) => <img id={"img"} height={50} src={params.value} />
    }
];




export const Teams = () => {
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
            </div>
            <Stack direction="row" spacing={2}>
                <Link to="/introTeams"><Button variant="outlined"  sx={{ margin: 1 }}color="success">Champions</Button> </Link>
                <Link to="/home"><Button variant="outlined" sx={{ margin: 1 }} color="success">Highest Totals</Button> </Link>
            </Stack>
            <h1 id="heading1">Winners</h1>
            <motion.div initial={{opacity: 0}}
                        transition={{duration: 1.4}}
                        animate={{opacity: 1}} className="card">
                    <DataGrid
                        rows={Pslchamp}
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
